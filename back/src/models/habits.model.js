const {model, Schema} = require("mongoose");
const userModel = require("./users.model");

const habitSchema = new Schema({
    idUser:{ /* revisar nombre de esta key */
        type:Schema.Types.ObjectId,
        ref: userModel,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    priority:{
        type:Number,
        required:true,
    },
    experience:{
        type:Number, /*a revisar*/
        default:'un valor',
        required:true,
    },
    avatar:{
        type:String,
        default:'http://image.com'
    },
    frecuency:{
        type:String,
        required:true,
    },
    isActive:{ /*a revisar NO ES PRIORIDAD*/
        type:Boolean,
        required:true,
    },    
});
const habitModel = model('habits', habitSchema);

module.exports =  habitModel;