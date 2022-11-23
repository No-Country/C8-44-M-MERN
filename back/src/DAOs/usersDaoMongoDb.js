const ContainerMongoDB = require("../container/containerMongoDB");
const userModel = require("../models/users.model");
const { comparePassword } = require("../utils/crypt");

class UsersDaoMongoDB extends ContainerMongoDB {
  constructor() {
    super(userModel);
  }

  // Andres findOneByEmail para login
  async findOneByEmail(email){
    try{
      const response = await userModel.findOne({email: email})
      console.log("documentos encontrados", response);
      return response
    }catch(error){
      console.log("error al buscar documento");
      console.log(error);
    }
  }

  async login(email, password){
    try{
      const user = await this.findOneByEmail(email)
      const checkPassword = comparePassword(password, user.password)
      if(checkPassword){
        return user
      }
    }catch (error){
      console.log("error al buscar documento");
      console.log(error);
    }
  }
}

module.exports = UsersDaoMongoDB;
