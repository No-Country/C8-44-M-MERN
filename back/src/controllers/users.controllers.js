const UsersDaoMongoDB = require("../DAOs/usersDaoMongoDb");
const HabitsDaoMongoDB = require("../DAOs/habitsDaoMongoDb");
const usersApi = new UsersDaoMongoDB();
const habitsApi = new HabitsDaoMongoDB();
const jwt = require("jsonwebtoken");
const { hashPassword } = require("../utils/crypt");

const authenticated = async (email, password) => {
  try {
    const result = await usersApi.login(email, password);
    if (result) {
      const token = jwt.sign(
        {
          id: result.id,
          email: result.email,
          rol: result.rol,
        },
        "No_Country-C8_44"
      );
      return token;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const auth = await authenticated(email, password);
    if(auth){
      res.status(200).json({token: auth});
    } else {
      res.status(400).json({message:"credenciales incorrectas"});
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo Salio mal",
    });
  }
};

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const newUser = {
      username,
      email,
      password: hashPassword(password),
      followers: [],
      habits: [],
    };
    const userSave = await usersApi.save(newUser);
    if (!userSave) {
      let auth = await authenticated(email, password);
      if (auth) {
        res.json({token: auth});
      } else {
        return auth;
      }
    } else {
      res.status(400).send(userSave);
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

const getMyUser = async (req, res, next) => {
  try {
    const id = req.user.id;
    const data = await usersApi.findOneByIdFollowers(id);
    res.json(data);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const addFollower = async (req, res, next) => {
  try {
    let user = await usersApi.findOneByIdFollowers(req.user.id);
    const follower = await usersApi.findOneById(req.body.id);
    const myfollower= await user.followers.filter(follower=>follower.id===req.body.id)
    if(!myfollower.length && follower){
      user.followers.push(follower);
      await usersApi.updateOne(user.username, user);
      res.status(200).json({ msg: "follower agregado", data: follower });
    }else{
      res.status(400).json({ msg: "El follower ya existe" });
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Hubo un error, usuario no existe",
    });
  }
};

// const addHabit = async (req, res, next) => { //agregar un habito por defecto
//   try {

//     const myHabit = await usersApi.getMyHabitById(req.user.id, req.body.id)
//     const habitDB = await habitsApi.findOneById(req.body.id);
//     if(!myHabit && habitDB){
//       user.habits.push(habitDB);
//       await usersApi.updateOne(user.username, user);
//       res.status(200).json({ msg: "hábito agregado", data: habitDB });
//     }else{
//       res.status(400).json({ msg: "El habito ya existe" });
//     }
//   } catch (error) {
//     next({
//       status: 400,
//       errorContent: error,
//       message: "Faltan datos",
//     });
//   }
// };
const getAllUsers = async (req, res, next) => {
  try {
    const users = await usersApi.getAll();
    res.json(users);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await usersApi.findOneById(id);
    res.json(response);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const getUserByName = async (req, res, next) => {
  try {
    const { username } = req.body;
    const response = usersApi.findOneByName(username);
    res.json(response);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const editUser = async (req, res, next) => {
  try {
    const newData = req.body;
    console.log(newData);
    let user = await usersApi.findOneByIdFollowers(req.user.id);
    let newUser ={...user._doc,...newData}
    usersApi.updateOne(user.username, newUser);
    res.json({ msg: "User modificado!", data: newUser });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.body;
    const result = await usersApi.deleteOne(id);
    res.json({ message: "se modifico el archivo", result });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const addHabit = async (req, res, next) => {
  try {
    let user = await usersApi.findOneById(req.params.id);
    let habit = await habitsApi.findOneById(req.body.id);
    user.habits.push(habit);
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

module.exports = {
  register,
  login,
  getMyUser,
  getAllUsers,
  getUserById,
  getUserByName,
  editUser,
  deleteUser,
  addHabit,
  addFollower,
};
