const UsersDaoMongoDB = require("../DAOs/usersDaoMongoDb")
const HabitsDaoMongoDB = require("../DAOs/habitsDaoMongoDb")
const habitsApi = new HabitsDaoMongoDB();
const usersApi = new UsersDaoMongoDB();

const getAllHabits = async (req, res, next) => { //obtener todos los habitos
  try {
    const habits = await habitsApi.getAll();
    res.json(habits)
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

const getHabitById = async (req, res, next) => { //obtener un habito
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

const createHabitAdmin = async (req, res, next) => { //crear un habito por defecto para todos los usuarios
  try {
    const { 
      name,
      description,
      category,
    } = req.body;
    const newHabit = {
        name,
        description,
        category,
        experience:0,
        frecuency:"each day",
        isDone:false
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

const createCustomHabit = async (req, res, next) => { //crear un habito custom para el usuario
  try {
    let user = await usersApi.findOneById(req.user.id);
    const { 
      name,
      description,
      category,
    } = req.body;
    const newHabit = {
      name,
      description,
      category,
      experience:0,
      frecuency:"each day",
      isDone:false
  };

    user.habits.push(newHabit);
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

const addHabit = async (req, res, next) => { //agregar un habito por defecto
  try {
    let user = await usersApi.findOneById(req.user.id);
    const habitDB = await habitsApi.findOneById(req.body.id);
    const myHabit = await usersApi.getMyHabitById(req.user.id, req.body.id)
    console.log(myHabit,"my habit")
    console.log(habitDB,"habit db")
    if(!myHabit && habitDB){
      user.habits.push(habitDB);
      await usersApi.updateOne(user.username, user);
      res.status(200).json({ msg: "hábito agregado", data: habitDB });
    }else{
      res.status(400).json({ msg: "El habito ya existe" });
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const deActivateHabit = async (req, res, next) => { //bajar un habito
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

const deleteHabit = async (req, res, next) => { //borrar un habito como admin
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

const getMyHabits = async (req, res, next) => { //obtener solo habitos del usuario
  try {
    const id = req.user.id
    const { habits } = await usersApi.findOneById(id)
    res.json(habits)
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo Salio mal",
    });
  }
};

const getMyHabitById = async(req, res, next) => { // obtener mi habito por id
  try {
    const userId = req.user.id;
    const habitId = req.params.habitId;
    const { habits } = await usersApi.findOneById(userId)
    const habit = habits.filter(habit => habit.id === habitId)
    res.json(habit)
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo Salio mal",
    });
  }
};

const updateIsDoneHabit = async (req, res, next) => { // controlador para marcar una tarea como completa
  try {
    const userId = req.user.id;
    const habitId = req.params.habitId;
    const { habits } = await usersApi.findOneById(userId);
    const habit = habits.filter(habit => habit.id === habitId);
    if(habit[0].isDone){
      res.json({message: 'Ya haz cumplido este habito por hoy'})
    }else{
      const newExperience = habit[0].experience + 10;
      const updatedUser = await usersApi.updateIsDone(userId, habitId, newExperience);

      const healthHabits = updatedUser.habits.filter( habit  => habit.category === 'Health');
      const educationHabits = updatedUser.habits.filter( habit  => habit.category === 'Education');

      updatedUser.healthExperience = healthHabits.reduce( (acum, habit) => acum + habit.experience, 0);
      updatedUser.educationExperience = educationHabits.reduce( (acum, habit) => acum + habit.experience, 0);

      updatedUser.experience = updatedUser.healthExperience + updatedUser.educationExperience;
      const result = await usersApi.updateOne(updatedUser.username, updatedUser);
      res.json(result)
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo Salio mal",
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
  createCustomHabit,
  getMyHabits,
  getMyHabitById,
  updateIsDoneHabit
}