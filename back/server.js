const express = require("express");

const UsuariosDaoMongoDB = require("./src/DAOs/usuariosDaoMongoDb.js");
const usuariosApi = new UsuariosDaoMongoDB();
const usersRouter = require('./src/routes/users')
usuariosApi.connect();

/* __________________ INSTANCIA DE SERVER */
const app = express();

/* __________________ MIDDLEWARES */
app.use(express.urlencoded({ encoded: true, extended: true }));
app.use(express.json());

/* ____________RUTAS */
app.use(usersRouter)

/* __________________ SERVIDOR */
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
server.on("error", (err) => {
  console.log(`error en el server: ${err}`);
});
