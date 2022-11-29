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
  priority: { /*a revisar para eliminar*/
    type: Number,
    required: true,
  },
  experience: {
    type: Number /*a revisar*/,
    default: 0,
    required: true,
  },
  frecuency: {
    type: String, /*a revisar para sacar porq dejariamos habitos DIARIOS*/
    required: false,
  },
  isActive: {
    /*a revisar NO ES PRIORIDAD*/ type: Boolean,
    required: true,
  },
});
const habitModel = model("habits", habitSchema);

module.exports = habitModel;
