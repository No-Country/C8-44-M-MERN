const { response } = require("express");
const express = require("express");
const router= express.Router()


const HabitsDaoMongoDB = require("../DAOs/habitsDaoMongoDb")
const habitsApi = new HabitsDaoMongoDB();

//HABITS  --> /home -> GET->getAllHabits | GET->`:id`getHabit | DELETE->`:id` deleteHabit | *PUT->`:id`updateHabit | POST->createHabit

const path="/api/habits"
//ruta para pedir todo los habitos
router.get(`${path}`,async (req,res)=>{
    const habits= await habitsApi.getAll();
    console.log(habits)
    res.json(habits)
})

//ruta para pedir un habito(id)
router.get(`${path}/:id`, async (req, res) => {
    const {id}=req.params;
    const response = await habitsApi.findOneById(id)
    res.json(response);
})
//ruta para subir un habito
router.post(`${path}`,async (req,res)=>{
    const { name, description, category, priority, experience, avatar, frecuency, isActive} = req.body;
    const newHabit = {
        name,
        description,
        category,
        priority,
        experience,
        avatar,
        frecuency,
        isActive
    };
    habitsApi.save(newHabit);
    res.json(newHabit)
})
//ruta para borrar un habito
router.put(`${path}`,async (req,res)=>{
    const {name} = req.body;
    habitsApi.deleteOne(name)
    res.json("se modifico el archivo")
})

module.exports = router