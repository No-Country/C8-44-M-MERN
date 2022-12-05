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
      const error = "Credenciales incorrectas, verificar correo o contraseña";
      return error;
    }
  } catch (error) {
    return error;
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const auth = await authenticated(email, password);
    if (auth) {
      console.log(auth, "user authenticated");
      res.status(200).json({token: auth});
    } else {
      res.status(400).json(auth);
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
        console.log(auth, "user authenticated and created");
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
    let user = await usersApi.findOneByIdFollowers(req.user.id); //este user soy YO
    const follower = await usersApi.findOneById(req.body.id); //user que quiero agregar
    user.followers.push(follower); //pusheo al key followers
    await usersApi.updateOne(user.username, user);
    res.json({ msg: "follower agregado", data: follower });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Hubo un error, usuario no existe",
    });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await usersApi.getAll();
    console.log(users);
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
      habits: [],
    };
    usersApi.updateOne(username, modifiedUser);
    res.json({ msg: "User modificado!", data: modifiedUser });
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
    let user = await usersApi.findOneById(req.params.id); //este user soy YO
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
