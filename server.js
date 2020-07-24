require('dotenv').config()
const line = require('@line/bot-sdk')
const express = require('express')
const app = express()
const Sentry = require('@sentry/node')
const figlet = require('figlet')
const dialogflow = require('dialogflow')
const { get } = require('lodash')
const { base64ToJSON } = require('./utils')
const { getUserProfile, getImageContent } = require('./middleware/line')
const {
  greetings,
  aboutUs,
  contactUs,
  brochure,
  brandStory,
  ourFeature,
  ourTarget,
  ourKillerFeature,
  gettingStart,
  fallback,
  weather,
  music,
  family,
  fasac,
  startveg,
  startvf,
  stepi,
  stepii,
  stepiii,
  stepiv,
  sohot,
  harvest,
  market,
} = require('./resposeMessage')
const {
  saveUserProfile,
  getUserData,
  setFieldOfUser,
  saveSensorData,
} = require('./middleware/firebase')

const { sendToMqtt, getFromMqtt } = require('./services/mqttConnect')

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
}

const client = new line.Client(config)

Sentry.init({ dsn: process.env.SENTRY_DSN, env: process.env.SENTRY_ENV });

figlet(`${process.env.APP_NAME}`, {
  font: 'isometric3',
  horizontalLayout: 'default',
  verticalLayout: 'default'
}, function (err, data) {
  if (err) {
    console.log('Something went wrong...')
    console.dir(err)
    return
  }
  console.log(data)
})

app.use(Sentry.Handlers.requestHandler());

getFromMqtt()

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/test', (req, res) => {
  console.log(req.body)
})

app.post('/callback', line.middleware(config), getUserProfile(client), (req, res) => {
  Promise.all(req.body.events.map(event => handleEvent(event, req)))
    .then(result => res.json(result))
    .catch(err => {
      console.error(err)
      res.status(500).end()
    })
})

async function handleEvent(event, req) {
  if (event.type === 'follow') {
    await saveUserProfile({ profile: req.profile, status: 'follow' })
    return client.replyMessage(event.replyToken, greetings(req.profile.displayName))
  }

  if (event.type === 'message' && event.message.type === 'image') {
    let message = null
    const messageId = get(event, 'message.id', 0)
    const image = await client.getMessageContent(messageId)
    console.log(image);
    // uploadImageToImageProcessingServer
    message = {
      type: 'text',
      text: 'Decease Detected!',
    }
    return client.replyMessage(event.replyToken, message)
  }

  if (event.type === 'message' && event.message.type === 'text') {
    const dialogflowCredential = base64ToJSON(process.env.DIALOG_FLOW_SERVICE_ACCOUNT)
    const dialogflowProjectId = dialogflowCredential.project_id

    const sessionClient = new dialogflow.SessionsClient({
      projectId: dialogflowProjectId,
      credentials: dialogflowCredential,
    })

    const sessionPath = sessionClient.sessionPath(dialogflowProjectId, req.profile.userId)

    const queryParams = {
      session: sessionPath,
      queryInput: {
        text: {
          text: event.message.text,
          languageCode: 'th-TH',
        },
      },
    }
    const currentUser = await getUserData({ userId: req.profile.userId })
    const userCurrentContext = get(currentUser, 'context', '')
    let dialogflowResp = null
    if (userCurrentContext.startsWith('get_')) {
      dialogflowResp = [
        {
          queryResult: {
            intent: {
              displayName: userCurrentContext,
            },
          },
        },
      ]
    } else {
      dialogflowResp = await sessionClient.detectIntent(queryParams)
    }
    const userIntent = get(dialogflowResp, '0.queryResult.intent.displayName')
    let message = null
    switch (userIntent) {
      case 'who_is_fasac':
        message = aboutUs()
        break
      case 'nong_pakard_help':
        message = brochure()
        break
      case 'music':
        message = music()
        break
      case 'family_fasac':
        message = family()
        break
      case 'what_is_fasac':
        message = fasac()
        break
      case 'start_plant':
        message = startveg()
        break
      case 'salad':
        message = startvf()
        break
      case 'contact_us':
        message = contactUs()
        break
      case 'brand_story':
        message = brandStory()
        break
      case 'our_feature':
        message = ourFeature()
        break
      case 'our_target':
        message = ourTarget()
        break
      case 'our_killer_feature':
        message = ourKillerFeature()
        break
      case 'getting_start':
        message = gettingStart()
        break
      case 'step_i':
        message = stepi()
        break
      case 'step_ii':
        message = stepii()
        break
      case 'step_iii':
        message = stepiii()
        break
      case 'step_iv':
        message = stepiv()
        break
      case 'status_vegetable':
        message = weather()
        break
      case 'how_many_days_left':
        message = harvest()
        break
      case 'how_about_plant':
        message = sohot()
        break
      case 'market':
        message = market()
        break
      case 'get_image':
        const payload = {
          caller: req.profile.userId,
          source: "LINE"
        }

        message = {
          type: 'text',
          text: 'Picture requested',
        }
        sendToMqtt({ topic: 'vision', trigg_message: JSON.stringify(payload) })
        break
      default:
        message = fallback(req.profile.displayName)
        break
    }
    return client.replyMessage(event.replyToken, message)
  }

  return Promise.resolve(null)
}

app.use(Sentry.Handlers.errorHandler());

app.listen(process.env.PORT || 5000, () => console.log('listening on port 5000!'))
