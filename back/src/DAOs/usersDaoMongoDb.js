const ContainerMongoDB = require("../container/containerMongoDB");
const userModel = require("../models/users.model");

class UsersDaoMongoDB extends ContainerMongoDB {
  constructor() {
    super(userModel);
  }
}

module.exports = UsersDaoMongoDB;
