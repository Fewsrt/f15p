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
        spacing: "sm",
        contents: [
          {
            type: "text",
            text: "การยืนยันการสั่งซื้อ",
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
                text: "----------------------",
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
              label: "สั่งซื้อทันที",
              text: "ยืนยันการสั่งซื้อ",
            },
            color: "#1E52E8FF",
            style: "primary",
          },
          {
            type: "button",
            action: {
              type: "message",
              label: "เลือกซื้อต่อ",
              text: "สั่งซื้อแพ็คเกจ",
            },
          },
        ],
      },
    },
  },
];
