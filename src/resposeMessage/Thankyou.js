require("dotenv").config();

module.exports = () => [
  {
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
        ],
      },
    },
  },
];
