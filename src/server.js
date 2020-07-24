require("dotenv").config();
const line = require("@line/bot-sdk");
const Sentry = require("@sentry/node");
const figlet = require("figlet");
const dialogflow = require("dialogflow");
const { get } = require("lodash");
const { base64ToJSON } = require("./utils");
const { getUserProfile, getImageContent } = require("./middleware/line");
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const port = process.env.PORT || 4000;
const {
  greetings,
} = require("./resposeMessage");
const {
  saveUserProfile,
  getUserData,
  setFieldOfUser,
  saveSensorData,
} = require("./middleware/firebase");

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  let reply_token = req.body.events[0].replyToken;
  let msg = req.body.events[0].message.text;
  reply(reply_token, msg);
  res.sendStatus(200);
});
app.listen(port);
function reply(reply_token, msg) {
  let headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer {KgShB29fTkZDN1AbVTfZok/t+EXmcHh8eZvF306SbZCKwiGLg68l/jCfkf3FihSo7oMU4FjplLFCnb9OlOZh61i7TuUu9FyYdogAPuxmqnBgjdFpv8bQ874xMbcNdyCaQrQALkiFRGt960WrO0L1egdB04t89/1O/w1cDnyilFU=}",
  };
  let body = JSON.stringify({
    replyToken: reply_token,
    messages: [
      {
        type: "text",
        text: msg,
      },
    ],
  });
  request.post(
    {
      url: "https://api.line.me/v2/bot/message/reply",
      headers: headers,
      body: body,
    },
    (err, res, body) => {
      console.log("status = " + res.statusCode);
    }
  );
}
