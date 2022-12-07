const express = require("express");
const UsersDaoMongoDB = require("./src/DAOs/usersDaoMongoDb.js");
require("dotenv").config();
const cors=require("cors");


const usersRouter = require("./src/routes/users.routes");
const habitsRouters = require("./src/routes/habits.routes");
const handleError = require('./src/middlewares/error.middleware')

const usersApi = new UsersDaoMongoDB();

usersApi.connect();
usersApi.UpdateIsDoneHabit(); //reseteador de habitos


/* __________________ INSTANCIA DE SERVER */
const app = express();
app.use(cors());

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

