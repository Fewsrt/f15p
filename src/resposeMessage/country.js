module.exports = () => [
  {
    type: "flex",
    altText: "Flex Message",
    contents: {
      type: "bubble",
      header: {
        type: "box",
        layout: "horizontal",
        contents: [
          {
            type: "text",
            text: "ร้อยเอ็ด",
            size: "xl",
            weight: "bold",
            color: "#000000",
          },
        ],
      },
      hero: {
        type: "image",
        url:
          "https://firebasestorage.googleapis.com/v0/b/f15p-6c132.appspot.com/o/ร้อยเอ็ด.png?alt=media&token=96bc1c9d-cd34-4917-b4ad-5a6415c17db5",
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover",
        action: {
          type: "uri",
          label: "Action",
          uri: "https://linecorp.com/",
        },
      },
      body: {
        type: "box",
        layout: "horizontal",
        spacing: "md",
        contents: [
          {
            type: "box",
            layout: "vertical",
            flex: 1,
            contents: [
              {
                type: "image",
                url:
                  "https://firebasestorage.googleapis.com/v0/b/f15p-6c132.appspot.com/o/วัดร้อยเอ็ด.jpg?alt=media&token=270f89ee-01b3-46c1-8f24-dc7649afbf28",
                gravity: "bottom",
                size: "sm",
                aspectRatio: "4:3",
                aspectMode: "cover",
              },
              {
                type: "image",
                url:
                  "https://firebasestorage.googleapis.com/v0/b/f15p-6c132.appspot.com/o/วัดร้อยเอ็ด.jpg?alt=media&token=270f89ee-01b3-46c1-8f24-dc7649afbf28",
                margin: "md",
                size: "sm",
                aspectRatio: "4:3",
                aspectMode: "cover",
              },
            ],
          },
          {
            type: "box",
            layout: "vertical",
            flex: 2,
            contents: [
              {
                type: "text",
                text: "พื้นที่",
                flex: 1,
                size: "xs",
                gravity: "top",
              },
              {
                type: "separator",
              },
              {
                type: "text",
                text: "8,299.449 ตร.กม.",
                flex: 2,
                size: "xs",
                gravity: "center",
              },
              {
                type: "separator",
              },
              {
                type: "text",
                text: "ประชากร (พ.ศ. 2562)",
                flex: 2,
                size: "xs",
                gravity: "center",
              },
              {
                type: "separator",
              },
              {
                type: "text",
                text: "1,305,211 คน",
                flex: 1,
                size: "xs",
                gravity: "bottom",
              },
            ],
          },
        ],
      },
      footer: {
        type: "box",
        layout: "horizontal",
        contents: [
          {
            type: "button",
            action: {
              type: "uri",
              label: "ข้อมูลเพิ่มเติม",
              uri: "https://th.wikipedia.org/wiki/จังหวัดร้อยเอ็ด",
            },
          },
        ],
      },
    },
  },
];
