module.exports = () => [
  {
    type: "template",
    altText: "this is a carousel template",
    template: {
      type: "carousel",
      actions: [],
      columns: [
        {
          thumbnailImageUrl:
            "https://firebasestorage.googleapis.com/v0/b/f15p-6c132.appspot.com/o/ปทุมรัตต์.png?alt=media&token=83e8d7d0-2677-429b-a80f-c58161e4d0c8",
          title: "อำเภอปทุมรัตต์",
          text: "อำเภอปทุมรัตต์แบ่งพื้นที่การปกครองออกเป็น 8 ตำบล",
          actions: [
            {
              type: "uri",
              label: "รายละเอียด",
              uri: "https://liff.line.me/1654550439-ekzxYQ08",
            },
            {
              type: "uri",
              label: "ฐานข้อมูล",
              uri:
                "https://drive.google.com/drive/folders/1-b4nbcqu9DakMf4tYj2eVyfnwbXSW51L?usp=sharing",
            },
          ],
        },
        {
          thumbnailImageUrl:
            "https://firebasestorage.googleapis.com/v0/b/f15p-6c132.appspot.com/o/โพนสูง.png?alt=media&token=cc8d650f-b7e0-4362-8410-cbec16e09bd3",
          title: "ข้อมูลตำบลโพนสูง",
          text: "มีหมู่บ้านในการปกครอง จำนวน 8 หมู่บ้าน",
          actions: [
            {
              type: "uri",
              label: "รายละเอียด",
              uri: "https://www.thaitambon.com/tambon/450304",
            },
            {
              type: "uri",
              label: "ฐานข้อมูล",
              uri:
                "https://drive.google.com/drive/folders/1-xf3B2rFj2cWqRB1BrdCrv89MgwOZR1o?usp=sharing",
            },
          ],
        },
      ],
    },
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
      ],
    },
  },
];
