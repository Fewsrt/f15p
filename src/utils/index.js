const base64ToJSON = (s) =>
  s ? JSON.parse(Buffer.from(s, "base64").toString()) : undefined;

module.exports = { base64ToJSON };
