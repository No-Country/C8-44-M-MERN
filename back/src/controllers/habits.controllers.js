const HabitsDaoMongoDB = require("../DAOs/habitsDaoMongoDb")
const habitsApi = new HabitsDaoMongoDB();


const getAllHabits = async (req, res, next) => {
  try {
    const habits = await habitsApi.getAll();
    console.log(habits)
    res.json(habits)
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

const getHabitById = async (req, res, next) => {
  try {
    const {id} = req.params;
    const habit = await habitsApi.findOneById(id)
    res.json(habit)
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

const createHabit = async (req, res, next) => {
  try {
    const { name, description, category, priority, experience, avatar, frecuency, isActive} = req.body;
    const newHabit = {
        name,
        description,
        category,
        priority,
        experience,
        avatar,
        frecuency,
        isActive
    };
    habitsApi.save(newHabit);
    res.status(201).json(newHabit)
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

const deActivateHabit = async (req, res, next) => {
  try {
    const {id} = req.params;
    habitsApi.deleteOne(id)
    res.json("se modifico el archivo")
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

const deleteHabit = async (req, res, next) => {
  try {
    const {id} = req.params
    await habitsApi.destroyOne(id)
    res.json(`Habit with ID: ${id} was delete`)
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

module.exports = {
  getAllHabits,
  getHabitById,
  createHabit,
  deActivateHabit,
  deleteHabit
}