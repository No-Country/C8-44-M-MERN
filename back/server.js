const express = require("express");
const UsersDaoMongoDB = require("./src/DAOs/usersDaoMongoDb.js");
require("dotenv").config();
const session = require("express-session");
const passport = require("passport");

const usersRouter = require("./src/routes/users.routes");
const habitsRouters = require("./src/routes/habits.routes");

const usuariosApi = new UsersDaoMongoDB();

usuariosApi.connect();

/* __________________ INSTANCIA DE SERVER */
const app = express();

/* __________________ MIDDLEWARES */
app.use(express.urlencoded({ encoded: true, extended: true }));
app.use(express.json());
app.use(session({secret : process.env.SESSION_SECRET}));
app.use(passport.initialize());
app.use(passport.session());

/* ____________RUTAS */
app.use(usersRouter);
app.use(habitsRouters);

/* __________________ SERVIDOR */
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
server.on("error", (err) => {
  console.log(`error en el server: ${err}`);
});
