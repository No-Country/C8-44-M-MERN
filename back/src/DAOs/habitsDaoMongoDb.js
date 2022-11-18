const ContainerMongoDB = require("../container/containerMongoDB");
const habitModel = require("../models/habits.model");

class HabitsDaoMongoDB extends ContainerMongoDB {
  constructor() {
    super(habitModel);
  }
}

module.exports = HabitsDaoMongoDB;
