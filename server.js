require("dotenv").config();
const line = require("@line/bot-sdk");
const express = require("express");
const app = express();
const Sentry = require("@sentry/node");
const figlet = require("figlet");
const dialogflow = require("dialogflow");
const { get } = require("lodash");
const { getUserProfile, getImageContent } = require("./src/middleware/line");
const {
  greetings,
  fallback,
  getstart,
  member,
  order,
  confirm,
  payment,
  orderlist,
  addmem,
  addmemtoDB,
} = require("./src/resposeMessage");
const {
  saveUserProfile,
  getUserData,
  setFieldOfUser,
  saveSensorData,
} = require("./src/middleware/firebase");

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

const client = new line.Client(config);

Sentry.init({ dsn: process.env.SENTRY_DSN, env: process.env.SENTRY_ENV });

figlet(
  `${process.env.APP_NAME}`,
  {
    font: "isometric3",
    horizontalLayout: "default",
    verticalLayout: "default",
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);

app.use(Sentry.Handlers.requestHandler());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/test", (req, res) => {
  console.log(req.body);
});

app.post(
  "/callback",
  line.middleware(config),
  getUserProfile(client),
  (req, res) => {
    Promise.all(req.body.events.map((event) => handleEvent(event, req)))
      .then((result) => res.json(result))
      .catch((err) => {
        console.error(err);
        res.status(500).end();
      });
  }
);

async function handleEvent(event, req) {
  if (event.type === "follow") {
    await saveUserProfile({ profile: req.profile, status: "follow" });
    return client.replyMessage(
      event.replyToken,
      greetings(req.profile.displayName)
    );
  }

  if (event.type === "message" && event.message.type === "image") {
    let message = null;
    const messageId = get(event, "message.id", 0);
    const image = await client.getMessageContent(messageId);
    // uploadImageToImageProcessingServer
    message = {
      type: "flex",
      altText: "สั่งซื้อแพ็คเกจ",
      contents: {
        type: "bubble",
        hero: {
          type: "image",
          url: "https://firebasestorage.googleapis.com/v0/b/comscipay.appspot.com/o/steam.jpg?alt=media&token=841b28b9-47f6-43bb-9464-7558a471fd19",
          size: "full",
          aspectRatio: "20:13",
          aspectMode: "cover",
          action: {
            type: "uri",
            label: "Line",
            uri: "https://linecorp.com/",
          },
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "ขอบคุณที่ใช้บริการ",
              weight: "bold",
              size: "xl",
              contents: [],
            },
            {
              type: "text",
              text: "สามารถตรวจสอบสินค้าได้ที่ E-mail",
              contents: [],
            },
          ],
        },
        footer: {
          type: "box",
          layout: "vertical",
          flex: 0,
          spacing: "sm",
          contents: [
            {
              type: "spacer",
              size: "sm",
            },
            {
              type: "button",
              action: {
                type: "message",
                label: "ตรวจสอบสถานะ",
                text: "ตรวจสอบสถานะ",
              },
              color: "#000000FF",
              style: "primary",
            },
          ],
        },
      },
    };
    return client.replyMessage(event.replyToken, message);
  }

  if (event.type === "message" && event.message.type === "text") {
    const dialogflowProjectId = process.env.DIALOG_FLOW_Project_ID;

    const sessionClient = new dialogflow.SessionsClient({
      projectId: dialogflowProjectId,
      keyFilename:
        "/Users/Few/Desktop/Fasac/line_Bot/f15p/src/services/dialogflow-service-account.json",
    });

    const sessionPath = sessionClient.sessionPath(
      dialogflowProjectId,
      req.profile.userId
    );

    const queryParams = {
      session: sessionPath,
      queryInput: {
        text: {
          text: event.message.text,
          languageCode: "th-TH",
        },
      },
    };

    const currentUser = await getUserData({ userId: req.profile.userId });
    const userCurrentContext = get(currentUser, "context", "");
    let dialogflowResp = null;
    if (userCurrentContext.startsWith("get_")) {
      dialogflowResp = [
        {
          queryResult: {
            intent: {
              displayName: userCurrentContext,
            },
          },
        },
      ];
    } else {
      dialogflowResp = await sessionClient.detectIntent(queryParams);
    }
    const userIntent = get(dialogflowResp, "0.queryResult.intent.displayName");
    console.log(userIntent);
    let message = null;
    switch (userIntent) {
      case "member":
        message = member();
        break;
      case "Order":
        message = order();
        break;
      case "Order180":
        message = confirm();
        break;
      case "Order650":
        message = confirm();
        break;
      case "Order750":
        message = confirm();
        break;
      case "Order1950":
        message = confirm();
        break;
      case "Confirm":
        message = payment();
        break;
      case "Orderlist":
        message = orderlist();
        break;
      case "addmem":
        message = addmem();
        break;
      case "addmemtoDB":
        message = addmemtoDB();
        break;
      default:
        message = fallback(req.profile.displayName);
        break;
    }
    return client.replyMessage(event.replyToken, message);
  }
  return Promise.resolve(null);
}

app.use(Sentry.Handlers.errorHandler());

app.listen(process.env.PORT || 5000, () =>
  console.log("listening on port 5000!")
);
