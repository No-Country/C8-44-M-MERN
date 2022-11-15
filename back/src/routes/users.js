const express = require("express");

const router= express.Router()

const UsuariosDaoMongoDB = require("../DAOs/usuariosDaoMongoDb");
const usuariosApi = new UsuariosDaoMongoDB();
const { hashPassword } = require('../utils/crypt')

// USER    --> /user -> PUT->updateUser (addFollower*)| GET->getUser(getFollowers) | DELETE->deleteUser
// ADMIN   --> /admin -> GET->getAllUsers | PUT->`:id`updateUser | GET->`:id`getUser | DELETE->`:id` deleteUser

const path="/api/register"

//ruta para pedir todos los user
router.get(`${path}`,async (req,res)=>{
    const user= await usuariosApi.getAll();
    console.log(user)
    res.json(user)
})

//ruta para pedir un user(name)
router.get(`${path}/one`, async (req, res) => {
    const {username}=req.body;
    const response=usuariosApi.findOneByName(username)
    res.json(response);
})

//ruta para pedir un user(id)
router.get(`${path}/:id`, async (req, res) => {
    const {id}=req.params;
    const response= await usuariosApi.findOneById(id)
    res.json(response);
})

//ruta para postear un user
router.post(`${path}`, async (req, res) => {
    const { username, fullname, email, password, birthday, avatar, rol, isActive, isPublic} = req.body;
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
    };
    console.log(newUser);
    usuariosApi.save(newUser);
    res.send('User created!')
});
//ruta para borrar un user
router.put(`${path}`,async (req,res)=>{
    const {name} = req.body;
    habitsApi.deleteOne(name)
    res.json("se modifico el archivo")
})


module.exports=router
