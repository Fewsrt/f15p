require("dotenv").config();

module.exports = (displayName) => [
  {
    type: "text",
    text: `คุณ ${displayName} สามารถเลือกเพิ่มเติม ได้โดยการใช้ตัวช่วยที่เราเตรียมไว้ให้ข้างล่างนี้ได้เลย`,
    quickReply: {
      items: [
        {
          type: "action",
          action: {
            type: "message",
            label: "สมัครสมาชิก",
            text: "สมัครสมาชิก",
          },
        },
        {
          type: "action",
          action: {
            type: "message",
            label: "สั่งซื้อสินค้า",
            text: "สั่งซื้อแพ็คเกจ",
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
