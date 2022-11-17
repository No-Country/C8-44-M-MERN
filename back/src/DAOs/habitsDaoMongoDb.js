const ContainerMongoDB = require("../container/containerMongoDB");
const habitModel = require("../models/habits.model");

class HabitsDaoMongoDB extends ContainerMongoDB {
  constructor() {
    super(habitModel);
  }
  
  async populateUser(id) {
    try {
      Habit.model.findOne({ _id: id })
        .populate("idUser")
        .exec(function (err, habit) {
          // do stuff with habit
      });
    } catch (error) {
      console.log("error poblando usuario");
      console.log(error);
    }
  }
}

module.exports = HabitsDaoMongoDB;