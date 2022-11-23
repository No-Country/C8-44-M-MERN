const UsersDaoMongoDB = require("../DAOs/usersDaoMongoDb");
const HabitsDaoMongoDB = require("../DAOs/habitsDaoMongoDb");
const usersApi = new UsersDaoMongoDB();
const habitsApi = new HabitsDaoMongoDB();
const jwt = require('jsonwebtoken');
const { hashPassword } = require("../utils/crypt");


const getAllUsers = async (req, res, next) => {
  try {
    const users = await usersApi.getAll()
    console.log(users)
    res.json(users)
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

const getUserById = async (req, res, next) =>{
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

const register = async (req, res, next) =>{
  try {
    const {
      username,
      fullname,
      email,
      password,
      birthday,
      avatar,
      rol,
      isActive,
      isPublic,
    } = req.body;
    const newUser = {
      username,
      fullname,
      email,
      password: hashPassword(password),
      birthday,
      avatar,
      rol,
      isActive,
      isPublic,
      followers:[],
      habits: [],
    };
    console.log(newUser);
    usersApi.save(newUser);
    res.send("User created!");
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const editUser = async (req, res, next) =>{
  try {
    let username = req.body.username;
    let modifiedUser = {
    _id: req.body._id,
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
    birthday: req.body.birthday,
    avatar: req.body.avatar,
    rol: req.body.rol,
    isActive: req.body.isActive,
    isPublic: req.body.isPublic,
    habits: []
    }
    usersApi.updateOne(username, modifiedUser);
    res.json({ msg:"User modificado!", data: modifiedUser});
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
    res.json({message: "se modifico el archivo", result});
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const createHabit = async (req, res, next) => {
  try {
    let user = await usersApi.findOneById(req.params.id);
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

const login = async (req, res, next) => {
  try {
    const { email, password} = req.body;
    const result = await usersApi.login(email, password)
    if(result){
      const token = jwt.sign(
        {
          id: result.id,
          email: result.email,
          rol: result.rol
        },
        'No_Country-C8_44'
      );
      return res.status(200).json({message: 'User autenticated', token: token})
    } else {
      return res.status(401).json({message: 'Invalid Credentials'})
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const getMyUser = async (req, res, next) => {
  try {
    const id = req.user.id
    console.log(id)
    const data = await usersApi.findOneById(id)
    res.json(data)
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
    let user = await usersApi.findOneById(req.user.id);
    console.log("user: ",req.user)
    const follower = await usersApi.findOneById(req.body.id);
    user.followers.push(follower);
    console.log(user);
    console.log(follower);
    await usersApi.updateOne(user.username, user);
    res.json({ msg: "follower agregado", data: follower });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};


module.exports = {
  getAllUsers,
  getUserById,
  getUserByName,
  register,
  editUser,
  deleteUser,
  createHabit,
  login,
  getMyUser,
  addFollower
}