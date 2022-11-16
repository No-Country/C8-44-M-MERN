const express = require("express");
const UsuariosDaoMongoDB = require("./src/DAOs/usuariosDaoMongoDb.js");
require('dotenv').config()

const usersRouter = require('./src/routes/users')
const habitsRouters=require('./src/routes/habits')

const usuariosApi = new UsuariosDaoMongoDB();

usuariosApi.connect();

/* __________________ INSTANCIA DE SERVER */
const app = express();

/* __________________ MIDDLEWARES */
app.use(express.urlencoded({ encoded: true, extended: true }));
app.use(express.json());

/* ____________RUTAS */
app.use(usersRouter)
app.use(habitsRouters)

/* __________________ SERVIDOR */
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
server.on("error", (err) => {
  console.log(`error en el server: ${err}`);
});
