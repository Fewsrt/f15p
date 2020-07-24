require("dotenv").config();

module.exports = (displayName) => [
  {
    type: "flex",
    altText: "Welcome to FaSAC",
    contents: {
      type: "bubble",
      direction: "ltr",
      header: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "Welcome To FaSAC",
            align: "center",
          },
        ],
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "ขอต้อนรับสู่ FaSAC",
            align: "center",
          },
        ],
      },
    },
  },
  {
    type: "text",
    text: `คุณ ${displayName} สามารถรู้จักเราเพิ่มเติม ได้โดยการใช้ตัวช่วยที่เราเตรียมไว้ให้ข้างล่างนี้ได้เลย`,
    quickReply: {
      items: [
        {
          type: "action",
          action: {
            type: "message",
            label: "เริ่มต้นปลูกผัก",
            text: "เริ่มต้นปลูกผัก",
          },
        },
        {
          type: "action",
          action: {
            type: "message",
            label: "ร้านค้าออนไลน์",
            text: "ร้านค้าออนไลน์",
          },
        },
        {
          type: "action",
          action: {
            type: "message",
            label: "ข่าวสาร",
            text: "ข่าวสาร",
          },
        },
        {
          type: "action",
          action: {
            type: "message",
            label: "สถานะของผัก",
            text: "สถานะของผัก",
          },
        },
        {
          type: "action",
          action: {
            type: "message",
            label: "ติดต่อเรา",
            text: "ติดต่อเรา",
          },
        },
      ],
    },
  },
];
