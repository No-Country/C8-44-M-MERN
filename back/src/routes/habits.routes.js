const express = require("express");
const router= express.Router()

const habitsControllers = require('../controllers/habits.controllers');
//HABITS  --> /home -> GET->getAllHabits | GET->`:id`getHabit | DELETE->`:id` deleteHabit | *PUT->`:id`updateHabit | POST->createHabit

const path="/api/habits"
//ruta para pedir todos los habitos y crear
router.route(`${path}`)
    .get(habitsControllers.getAllHabits)
    .post(habitsControllers.createHabit)

//ruta para pedir un habito(id)
router.route(`${path}/:id`)
    .get(habitsControllers.getHabitById)
    .put(habitsControllers.deActivateHabit)
    .delete(habitsControllers.deleteHabit)


module.exports = router