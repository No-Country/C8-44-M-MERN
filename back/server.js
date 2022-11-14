const express = require("express");

const UsuariosDaoMongoDB = require("./src/DAOs/usuariosDaoMongoDb.js");
const usuariosApi = new UsuariosDaoMongoDB();
usuariosApi.connect();

/* __________________ INSTANCIA DE SERVER */
const app = express();

/* __________________ MIDDLEWARES */
app.use(express.urlencoded({ encoded: true, extended: true }));
app.use(express.json());

/* ____________RUTAS */
app.get("/register", (req, res) => {
  // ruta de registro
});
app.post("/register", async (req, res) => {
  const { nombre, password, direccion } = req.body;

  const newUsuario = await usuariosApi.findOneByName(nombre);
  // const newUsuario = usuariosApi.getAll().find((usuario) => usuario.nombre == nombre);
  if (newUsuario) {
    // error de registro
    console.log("usuario repetido");

    // res.render("register-error");
  } else {
    const newUser = {
      nombre,
      password,
      direccion,
    };
    console.log(newUser);
    usuariosApi.save(newUser);
    res.send("página de documento insertado");
  }
});

/* __________________ SERVIDOR */
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
server.on("error", (err) => {
  console.log(`error en el server: ${err}`);
});
