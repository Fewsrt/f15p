const { get } = require("lodash");

module.exports = (client) => async (req, res, next) => {
  const userId = get(req, "body.events[0].source.userId", "");
  const profile = await client.getProfile(userId);
  req.profile = profile;

  return next();
};
