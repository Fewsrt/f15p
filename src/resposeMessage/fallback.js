require("dotenv").config();

module.exports = (displayName) => [
  {
    type: "text",
    text: "ไม่พบสิ่งที่ต้องการหา",
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
            label: "ข้อมูลพื้นที่",
            text: "ข้อมูลพื้นที่",
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
