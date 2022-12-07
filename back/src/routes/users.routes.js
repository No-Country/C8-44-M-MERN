const express = require("express");
const router = express.Router();
const passport = require("passport");
require('../middlewares/auth.middleware')(passport)
const userControllers = require('../controllers/users.controllers');

const path = "/api/user";

router.post(`${path}/login`, userControllers.login);
router.post(`${path}/register`, userControllers.register);

router.route(`${path}/me`)
  .get(passport.authenticate('jwt', {session: false}), userControllers.getMyUser)
  .put(passport.authenticate('jwt', {session: false}), userControllers.addFollower);

router.route(`${path}`)
  .get(userControllers.getAllUsers)
  .put( userControllers.deleteUser)

router.get(`${path}/one`, userControllers.getUserByName);

router.put(`${path}/update`, passport.authenticate('jwt', {session: false}), userControllers.editUser);

router.route(`${path}/:id`)
  .get(userControllers.getUserById)

module.exports = router;
