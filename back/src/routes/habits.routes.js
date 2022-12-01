const express = require("express");
const router= express.Router()
const passport = require("passport");
require('../middlewares/auth.middleware')(passport)
const habitsControllers = require('../controllers/habits.controllers');
//HABITS  --> /home -> GET->getAllHabits | GET->`:id`getHabit | DELETE->`:id` deleteHabit | *PUT->`:id`updateHabit | POST->addHabit

const path="/api/habits"
//ruta para pedir todos los habitos y crear
router.route(`${path}`)
    .get(habitsControllers.getAllHabits)
    .put(habitsControllers.createHabitAdmin); 
    //habitos por defecto

router.route(`${path}/user`)
    .put(passport.authenticate('jwt', {session: false}), habitsControllers.createCustomHabit) 
    //creamos y agregamos un habito custom al usuario
    
router.route(`${path}/agregar`)
    .put(passport.authenticate('jwt', {session: false}), habitsControllers.addHabit) 
    //agregamos un habito de los por defecto
    
//ruta para pedir un habito(id)
router.route(`${path}/:id`)
    .get(habitsControllers.getHabitById)
    .put(habitsControllers.deActivateHabit)
    .delete(habitsControllers.deleteHabit)

module.exports = router