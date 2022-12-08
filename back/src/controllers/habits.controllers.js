const UsersDaoMongoDB = require('../DAOs/usersDaoMongoDb');
const HabitsDaoMongoDB = require('../DAOs/habitsDaoMongoDb');
const habitsApi = new HabitsDaoMongoDB();
const usersApi = new UsersDaoMongoDB();

const getAllHabits = async (req, res, next) => {
  try {
    const habits = await habitsApi.getAll();
    console.log(habits);
    res.json(habits);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Algo salio mal',
    });
  }
};

const getHabitById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const habit = await habitsApi.findOneById(id);
    res.json(habit);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Algo salio mal',
    });
  }
};

const createHabitAdmin = async (req, res, next) => {
  try {
    console.log('hi');
    const { name, description, category } = req.body;
    const newHabit = {
      name,
      description,
      category,
      experience: 0,
      frecuency: 'each day',
      isDone: false,
    };
    console.log(newHabit);
    habitsApi.save(newHabit);
    res.status(201).json(newHabit);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Algo salio mal',
    });
  }
};

const createCustomHabit = async (req, res, next) => {
  try {
    let user = await usersApi.findOneById(req.user.id); //este user soy YO
    const { name, description, category } = req.body;
    const newHabit = {
      name,
      description,
      category,
      experience: 0,
      frecuency: 'each day',
      isDone: false,
    };
    console.log(user);
    console.log(user.habits, 'hello');
    user.habits.push(newHabit); //pusheo al key followers
    await usersApi.updateOne(user.username, user);
    res.json({ msg: 'habito creado', data: newHabit });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Algo salio mal',
    });
  }
};

const addHabit = async (req, res, next) => {
  try {
    let user = await usersApi.findOneById(req.user.id); //este user soy YO
    const habitDB = await habitsApi.findOneById(req.body.id);
    const habitExist = user.habits.filter((habit) => habitDB._id === habit._id);
    if (!habitExist) {
      user.habits.push(habitDB);
      console.log(user);
      await usersApi.updateOne(user.username, user);
      res.status(200).json({ msg: 'hábito agregado', data: habitDB });
    } else {
      res.status(400).json({ msg: 'El habito ya existe' });
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Faltan datos',
    });
  }
};

const deActivateHabit = async (req, res, next) => {
  try {
    const { id } = req.params;
    habitsApi.deleteOne(id);
    res.json('se modifico el archivo');
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Algo salio mal',
    });
  }
};

const deleteHabit = async (req, res, next) => {
  try {
    const { id } = req.params;
    await habitsApi.destroyOne(id);
    res.json(`Habit with ID: ${id} was delete`);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Algo salio mal',
    });
  }
};

// controladores para solo obtener habitos del usuario
const getMyHabits = async (req, res, next) => {
  try {
    const id = req.user.id;
    const { habits } = await usersApi.findOneById(id);
    res.json(habits);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Algo Salio mal',
    });
  }
};

// obtener mi habito por id
const getMyHabitById = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const habitId = req.params.habitId;

    const { habits } = await usersApi.findOneById(userId);
    const habit = habits.filter((habit) => habit.id === habitId);

    res.json(habit);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Algo Salio mal',
    });
  }
};

// controlador para marcar una tarea como completa
const updateIsDoneHabit = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const habitId = req.params.habitId;

    const { habits } = await usersApi.findOneByIdFollowers(userId);
    const habit = habits.filter((habit) => habit.id === habitId);

    if (habit[0].isDone) {
      res.json({ message: 'Ya haz cumplido este habito por hoy' });
    } else {
      const newExperience = habit[0].experience + 10;
      const result = await usersApi.updateIsDone(
        userId,
        habitId,
        newExperience
      );
      res.json(result);
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Algo Salio mal',
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
  updateIsDoneHabit,
};
