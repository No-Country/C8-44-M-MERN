const express = require("express");
const UsersDaoMongoDB = require("./src/DAOs/usersDaoMongoDb.js");
require("dotenv").config();

const usersRouter = require("./src/routes/users.routes");
const habitsRouters = require("./src/routes/habits.routes");
const handleError = require("./src/middlewares/error.middleware");
const session = require("express-session");
const passport = require("passport");

const usersApi = new UsersDaoMongoDB();

usersApi.connect();

/* __________________ INSTANCIA DE SERVER */
const app = express();

/* app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
); */

app.use(passport.authenticate("google", { scope: ["profile"] }));
/* __________________ MIDDLEWARES */
app.use(express.urlencoded({ encoded: true, extended: true }));
app.use(express.json());

/* ____________RUTAS */
app.use(usersRouter);
app.use(habitsRouters);

app.use(handleError);
/* __________________ SERVIDOR */
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
server.on("error", (err) => {
  console.log(`error en el server: ${err}`);
});
