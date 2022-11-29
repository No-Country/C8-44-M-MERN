const {model, Schema} = require("mongoose");

const categorySchema = new Schema({
    name:{
        type:String,
        required:true,
    }
});
const categoryModel = model('categories', categorySchema);

module.exports =  categoryModel;