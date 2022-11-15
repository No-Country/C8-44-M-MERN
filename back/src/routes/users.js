const express = require("express");

const router= express.Router()

const UsuariosDaoMongoDB = require("../DAOs/usuariosDaoMongoDb");
const usuariosApi = new UsuariosDaoMongoDB();
const { hashPassword } = require('../utils/crypt')

const path="/api/register"

router.get(`${path}`,async (req,res)=>{
    const user= await usuariosApi.getAll();
    console.log(user)
    res.json(user)
})

router.get(`${path}/one`, async (req, res) => {
    const {username}=req.body;
    usuariosApi.findOneByName(username)
    res.send("mande");
})

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

router.put(`${path}`,async (req,res)=>{
    const {name} = req.body;
    habitsApi.deleteOne(name)
    res.json("se modifico el archivo")
})

module.exports=router
