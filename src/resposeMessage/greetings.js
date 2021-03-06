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
            text: "ขอต้อนรับสู่ระบบค้นหาข้อมูล",
            align: "center",
          },
        ],
      },
      hero: {
        type: "image",
        url:
          "https://firebasestorage.googleapis.com/v0/b/f15p-6c132.appspot.com/o/F15P.png?alt=media&token=968ec7f0-2391-4dab-8f46-7eb28ede8012",
        size: "full",
        aspectRatio: "1.51:1",
        aspectMode: "fit",
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "โครงการ F15P และ UHT",
            align: "center",
          },
        ],
      },
    },
  },
  {
    type: "text",
    text: `คุณ ${displayName} สามารถเลือกเพิ่มเติม ได้โดยการใช้ตัวช่วยที่เราเตรียมไว้ให้ข้างล่างนี้ได้เลย`,
    quickReply: {
      items: [
        {
          type: "action",
          action: {
            type: "message",
            label: "ข้อมูลพื้นที่",
            text: "ข้อมูลพื้นที่",
          },
        },
        {
          type: "action",
          action: {
            type: "message",
            label: "ขอข้อมูล",
            text: "ขอข้อมูล",
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
