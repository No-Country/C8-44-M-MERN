const ContainerMongoDB = require("../container/containerMongoDB");
const userModel = require("../models/users.model");
const { comparePassword } = require("../utils/crypt");
const schedule=require("node-schedule");
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
      throw error
    }
  }

  async findOneByIdFollowers(id) {
    try {
      let response = await userModel.findOne({ _id: id }).populate('followers'); //si o si un findOne
      return response;
    } catch (error) {
      console.log("error al buscar documento");
      console.log(error);
    }
  }

  async getAll(){
    try {
      const response = await userModel.find().populate('followers');
      return response;
    } catch (error) {
      console.log("error al buscar documentos");
      console.log(error);
    }
  }

  async updateIsDone (userId, habitId, exp){
    console.log(exp, "exp")
    try {
      const data  = await userModel.findOneAndUpdate(
        {_id: userId, "habits._id": habitId},
        {$set: 
          {"habits.$.isDone": true,
          "habits.$.experience": exp}
        },
        { returnOriginal: false })

      return data
    } catch (error) {
      throw error
    }
  }
  //RESETEADOR DE HABITOS
  // async UpdateIsDoneHabit(){
  //   schedule.scheduleJob('*/2 * * * * *',()=>{ //cada dos segundos
  //     console.log('I ran....')
  //   })
  // }

  // cron expresions:
  // https://crontab.cronhub.io/

  async UpdateIsDoneHabit() {
    try {
      schedule.scheduleJob('0 0 * * *', async()=>{
    
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
