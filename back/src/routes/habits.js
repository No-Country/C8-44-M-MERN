const { response } = require("express");
const express = require("express");
const router= express.Router()

const path="/api/habits"

const HabitsDaoMongoDB = require("../DAOs/habitsDaoMongoDb")
const habitsApi = new HabitsDaoMongoDB();

//ruta para pedir todo los habitos
router.get(`${path}`,async (req,res)=>{
    const habits= await habitsApi.getAll();
    console.log(habits)
    res.json(habits)
})
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
//DELETE A HABIT CON FLAG isActive
router.put(`${path}`,async (req,res)=>{
    const {name} = req.body;
    habitsApi.deleteOne(name)
    res.json("se modifico el archivo")
})

module.exports = router