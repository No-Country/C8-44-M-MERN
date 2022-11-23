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
      .populate("users")
      .exec(function(err, result){
        if(err) return console.log("se pudrio")
        console.log(result);
      })
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
      console.log(user)
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
