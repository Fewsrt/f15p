require("dotenv").config();

module.exports = () => [
  {
    type: "flex",
    altText: "แพ็คเกจ",
    contents: {
      type: "carousel",
      contents: [
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://firebasestorage.googleapis.com/v0/b/comscipay.appspot.com/o/5.png?alt=media&token=8ae778d8-316b-4cd3-9bd7-87636628775e",
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
                text: "Steam Wallet 5$",
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
                    text: "180 บาท",
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
                  label: "Add to Cart",
                  text: "สั่งซื้อ 180 บาท",
                },
                color: "#59CA53FF",
                style: "primary",
              },
            ],
          },
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://firebasestorage.googleapis.com/v0/b/comscipay.appspot.com/o/15.png?alt=media&token=f59cf2c5-c07e-4176-bcde-5ab34f42a574",
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
                text: "Steam Wallet 15$",
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
                    text: "750 บาท",
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
                  label: "Add to Cart",
                  text: "สั่งซื้อ 750 บาท",
                },
                color: "#59CA53FF",
                style: "primary",
              },
            ],
          },
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://firebasestorage.googleapis.com/v0/b/comscipay.appspot.com/o/20$.png?alt=media&token=440f227a-8cdb-4a98-b98d-ec04f1c28898",
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
                text: "Steam Wallet 20$",
                weight: "bold",
                size: "xl",
                wrap: true,
                contents: [],
              },
              {
                type: "box",
                layout: "baseline",
                flex: 1,
                contents: [
                  {
                    type: "text",
                    text: "650 บาท",
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
                  label: "Add to Cart",
                  text: "สั่งซื้อ 650 บาท",
                },
                flex: 2,
                color: "#59CA53FF",
                style: "primary",
              },
            ],
          },
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://firebasestorage.googleapis.com/v0/b/comscipay.appspot.com/o/50$.jpg?alt=media&token=0439c486-0c3b-4da8-abb8-0eeb6d9869f5",
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
                text: "Steam Wallet 50$",
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
                    text: "1950 บาท",
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
                  label: "Add to Cart",
                  text: "สั่งซื้อ 1950 บาท",
                },
                color: "#59CA53FF",
                style: "primary",
              },
            ],
          },
        },
      ],
    },
  },
];
