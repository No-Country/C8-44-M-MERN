const {model, Schema} = require("mongoose");

const categoriaSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
});
const categoriaModel = model('categorias', categoriaSchema);

module.exports =  categoriaModel;