const UsersDaoMongoDB = require("../DAOs/usersDaoMongoDb")
const HabitsDaoMongoDB = require("../DAOs/habitsDaoMongoDb")
const habitsApi = new HabitsDaoMongoDB();
const usersApi = new UsersDaoMongoDB();


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

const createHabitAdmin = async (req, res, next) => {
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

const createCustomHabit = async (req, res, next) => {

  try {
    let user = await usersApi.findOneById(req.user.id);       //este user soy YO
    const { name, description, category, priority, frecuency} = req.body;
    const newHabit = {
        name,
        description,
        category,
        priority,
        experience:0,
        frecuency, /* a revisar*/
        isActive:true
    };
    console.log(user)
    console.log(user.habits,"hello")
    user.habits.push(newHabit);                            //pusheo al key followers
    await usersApi.updateOne(user.username, user);
    res.json({ msg: "habito creado", data: newHabit });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

const addHabit = async (req, res, next) => {
  try {
    let user = await usersApi.findOneById(req.user.id); //este user soy YO
    let habit = await habitsApi.findOneById(req.body.id);
    user.habits.push(habit);
    console.log(user);
    await usersApi.updateOne(user.username, user);
    res.status(200).json({ msg: "hábito agregado", data: habit });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
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
  deActivateHabit,
  deleteHabit,
  addHabit,
  createHabitAdmin,
  createCustomHabit
}