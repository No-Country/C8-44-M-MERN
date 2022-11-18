const ContainerMongoDB = require("../container/containerMongoDB");
const habitModel = require("../models/habits.model");

class HabitsDaoMongoDB extends ContainerMongoDB {
  constructor() {
    super(habitModel);
  }
  // async findUserAndAddHabit(id) {
  //   try {
  //     let response = await this.model.findOne({ _id: id });
  //     console.log(response);
  //     return response;
  //   } catch (error) {
  //     console.log("error al buscar documento");
  //     console.log(error);
  //   }
  // }
}

module.exports = HabitsDaoMongoDB;
