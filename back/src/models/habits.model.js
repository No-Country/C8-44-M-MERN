const { model, Schema } = require("mongoose");
const userModel = require("./users.model");

const habitSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: [
    {
      name: {
        type: String,
        required: true,
      }
    },
  ],
  experience: {
    type: Number /*a revisar*/,
    default: 0,
    required: true,
  },
  frecuency: {
    type: String, /*a revisar para sacar porq dejariamos habitos DIARIOS*/
    required: false,
  },
  isDone: {
    type: Boolean,
    default:false,
    required: true,
  },
});
const habitModel = model("habits", habitSchema);

module.exports = habitModel;
