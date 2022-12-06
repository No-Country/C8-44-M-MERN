const ContainerMongoDB = require("../container/containerMongoDB");
const userModel = require("../models/users.model");
const { comparePassword } = require("../utils/crypt");
const schedule=require("node-schedule");
const { Mongoose, } = require("mongoose");
const ObjectId = require("mongoose").Types.ObjectId
class UsersDaoMongoDB extends ContainerMongoDB {
  constructor() {
    super(userModel);
  }
  async findOneByEmail(email){
    try{
      const response = await userModel.findOne({email: email})
      return response
    }catch(error){
      throw error
    }
  }

  async login(email, password){
    try{
      const user = await this.findOneByEmail(email)
      if(user){
        const checkPassword = comparePassword(password, user.password)
        console.log(checkPassword)
        if(checkPassword){
          return user
        }
      }
    }catch (error){
      throw error
    }
  }

  async findOneByIdFollowers(id) {
    try {
      let response = await userModel.findOne({ _id: id }).populate('followers'); //si o si un findOne
      return response;
    } catch (error) {
      console.log("error al buscar documento");
      throw error
    }
  }

  async getAll(){
    try {
      const response = await userModel.find().populate('followers');
      return response;
    } catch (error) {
      console.log("error al buscar documentos");
      throw error
    }
  }

  async updateIsDone (userId, habitId, exp){
    try {
      const data  = await userModel.findOneAndUpdate(
        {_id: userId, "habits._id": habitId},
        {$set: 
          {"habits.$.isDone": true,
          "habits.$.experience": exp}
        },
        { new: true })

      return data
    } catch (error) {
      throw error
    }
  }

  async getMyHabitById (userId, habitId){
    try {
      const data  = await userModel.findOne(
        {_id: userId, "habits._id": habitId},
        { returnOriginal: false })
      return data
    } catch (error) {
      throw error
    }
  }

  async UpdateIsDoneHabit() {
    try {
      schedule.scheduleJob('0 3 * * *', async()=>{ //a las 3am xq hay un delay de 3horas con el server
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        console.log("resetie", today.toUTCString())
        let users = await userModel.find();
        users.map(user=>{
          user.habits.map(habit=>{
            habit.isDone = false;
          })
          this.updateOne(user.username, user);
        })
      })
    } catch (error) {
      console.log("error al deshabilitar habitos");
      console.log(error);
    }
  }

}

module.exports = UsersDaoMongoDB;