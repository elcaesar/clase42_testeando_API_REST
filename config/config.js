require("dotenv").config();

module.exports = {
  app: {
    persistence : process.env.PERSISTENCE,
    mongoUri    : process.env.MONGO_URI,
    firebase    : process.env.GOOGLE_APPLICATION_CREDENTIALS
  },
};