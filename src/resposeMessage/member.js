require("dotenv").config();

module.exports = () => [
  {
    type: "flex",
    altText: "สมัครสมาชิก",
    contents: {
      type: "bubble",
      hero: {
        type: "image",
        url: "https://firebasestorage.googleapis.com/v0/b/comscipay.appspot.com/o/steam.jpg?alt=media&token=841b28b9-47f6-43bb-9464-7558a471fd19",
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover",
      },
      body: {
        type: "box",
        layout: "vertical",
        spacing: "sm",
        contents: [
          {
            type: "text",
            text: "มาเป็นครอบครัวเดียวกัน",
            weight: "bold",
            size: "xl",
            wrap: true,
            contents: [],
          },
          {
            type: "box",
            layout: "baseline",
            contents: [
              {
                type: "text",
                text: "----------------------------------",
                weight: "bold",
                size: "xl",
                flex: 0,
                wrap: true,
                contents: [],
              },
            ],
          },
        ],
      },
      footer: {
        type: "box",
        layout: "vertical",
        spacing: "sm",
        contents: [
          {
            type: "button",
            action: {
              type: "message",
              label: "สมัครสมาชิก",
              text: "ต้องการสมัครสมาชิก",
            },
            color: "#1E52E8FF",
            style: "primary",
          },
          {
            type: "button",
            action: {
              type: "message",
              label: "เข้าสู่ระบบ",
              text: "ต้องการเข้าสู่ระบบ",
            },
          },
        ],
      },
    },
  },
];
