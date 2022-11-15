const ContenedorMongoDB = require("../container/contenedorMongoDB");
const usuarioModel = require("../models/users.model");

class UsuariosDaoMongoDB extends ContenedorMongoDB {
  constructor() {
    super(usuarioModel);
  }
}

module.exports = UsuariosDaoMongoDB;
