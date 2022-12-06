const express = require("express");
const router= express.Router()
const passport = require("passport");
require('../middlewares/auth.middleware')(passport)
const habitsControllers = require('../controllers/habits.controllers');

const path="/api/habits"

router.route(`${path}`)
    .get(habitsControllers.getAllHabits)
    .post(habitsControllers.createHabitAdmin); 

router.route(`${path}/user`)
    .put(passport.authenticate('jwt', {session: false}), habitsControllers.createCustomHabit)
    .get(passport.authenticate('jwt', {session: false}), habitsControllers.getMyHabits)

router.route(`${path}/add`)
    .put(passport.authenticate('jwt', {session: false}), habitsControllers.addHabit) 

router.route(`${path}/user/:habitId`)
    .put(passport.authenticate('jwt', {session: false}), habitsControllers.updateIsDoneHabit)
    .get(passport.authenticate('jwt', {session: false}), habitsControllers.getMyHabitById)

router.route(`${path}/:id`)
    .get(habitsControllers.getHabitById)
    .put(habitsControllers.deActivateHabit)
    .delete(habitsControllers.deleteHabit)

module.exports = router