const express = require("express");
const router = express.Router();

const passport = require("passport");
require('../middlewares/auth.middleware')(passport)


const userControllers = require('../controllers/users.controllers');

// USER    --> /user -> PUT->updateUser (addFollower*)| GET->getUser(getFollowers) | DELETE->deleteUser
// ADMIN   --> /admin -> GET->getAllUsers | PUT->`:id`updateUser | GET->`:id`getUser | DELETE->`:id` deleteUser

const path = "/api/user";

//ruta para pedir todos los user
router.get(`${path}`, userControllers.getAllUsers);

//ruta para pedir un user(name)
router.get(`${path}/one`, userControllers.getUserByName);

//ruta para postear un user
router.post(`${path}/register`, userControllers.register);
router.post(`${path}/login`, userControllers.login);

router.put(`${path}/update`, userControllers.editUser);

//ruta para borrar un user
router.put(`${path}`, userControllers.deleteUser);


router.route(`${path}/me`)
  .get(passport.authenticate('jwt', {session: false}), userControllers.getMyUser)
  .put(passport.authenticate('jwt', {session: false}), userControllers.addFollower);
// POST hábito a un user
// incorpora hábitos al user por ID de hábito
router.post(`${path}/:id/productos`, userControllers.createHabitAdmin);
//ruta para pedir un user(id)
router.route(`${path}/:id`)
  .get(userControllers.getUserById)

module.exports = router;
