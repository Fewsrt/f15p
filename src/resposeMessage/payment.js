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
        spacing: "md",
        contents: [
          {
            type: "text",
            text: "ขั้นตอนการชำระเงิน",
            weight: "bold",
            size: "xl",
            gravity: "center",
            wrap: true,
            contents: [],
          },
          {
            type: "box",
            layout: "vertical",
            margin: "xxl",
            contents: [
              {
                type: "spacer",
              },
              {
                type: "image",
                url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/linecorp_code_withborder.png",
                size: "5xl",
                aspectMode: "cover",
              },
            ],
          },
        ],
      },
      footer: {
        type: "box",
        layout: "horizontal",
        flex: 1,
        contents: [
          {
            type: "text",
            text: "เมื่อชำระเสร็จแล้วกรุณาส่งสลิปมาด้วยนะครับ",
            weight: "bold",
            size: "sm",
            align: "center",
            gravity: "center",
            contents: [],
          },
        ],
      },
    },
  },
];
