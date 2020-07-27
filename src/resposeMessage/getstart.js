module.exports = () => [
  {
    type: "text",
    text: "กรุณาพิมพ์จังหวัดที่ต้องการ",
  },
  {
    type: "text",
    text: `คุณสามารถเลือกข้อมูลเพิ่มเติม ได้โดยการใช้ตัวช่วยที่เราเตรียมไว้ให้ข้างล่างนี้ได้เลย`,
    quickReply: {
      items: [
        {
          type: "action",
          action: {
            type: "message",
            label: "ร้อยเอ็ด",
            text: "ร้อยเอ็ด",
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
      ],
    },
  },
];
