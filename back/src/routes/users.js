const express = require("express");

const router= express.Router()

const UsuariosDaoMongoDB = require("../DAOs/usuariosDaoMongoDb");
const usuariosApi = new UsuariosDaoMongoDB();

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
        password,
        birthday,
        avatar,
        rol,
        isActive,
        isPublic,
    };
    console.log(newUser);
    usuariosApi.save(newUser);
});

module.exports=router
