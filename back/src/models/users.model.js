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
    default: '',
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
    default: 'user',
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
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
      category: [
        {
          name: {
            type: String,
            required: true,
          }
        },
      ],
      experience: {
        type: Number,
        default: 0,
        required: true,
      },
      frecuency: {
        type: String,
        required: false,
      },
      isDone: {
        type: Boolean,
        default:false,
        required: true,
      },
    },
  ],
});
const userModel = model("users", userSchema);

module.exports = userModel;
