const {model, Schema} = require("mongoose");

const habitosSchema = new Schema({
    idUser:{
        type:String,/*A REVISAR que tipo de dato maneja mongo*/
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
const habitosModel = model('habitos', habitosSchema);

module.exports =  habitosModel;