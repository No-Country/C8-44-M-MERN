const { model, Schema } = require("mongoose");

// agregar hábitos

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  fullname: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "https://i.imgur.com/WxNkK7J.png",
  },
  rol: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  followers:[
    {type: Schema.Types.ObjectId, ref: 'users'}],
  habits: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      priority: {
        type: Number,
        required: true,
      },
      experience: {
        type: Number /*a revisar*/,
        default: 1,
        required: true,
      },
      frecuency: {
        type: String,
        required: true,
      },
      isActive: {
        /*a revisar NO ES PRIORIDAD*/ type: Boolean,
        required: true,
      },
    },
  ],
});
const userModel = model("users", userSchema);

module.exports = userModel;
