const config = require("../config/config");

const userMongo = require("../dao/userMongo");
const userFirebase = require("../dao/userFireBase");


class PersistenceFactory {
  static getPersistence = async () => {
    switch (config.app.persistence) {
      case "MONGO":
        return new userMongo();
      case "FIREBASE":
        return new userFirebase();
    }
  };
}

module.exports = PersistenceFactory;
