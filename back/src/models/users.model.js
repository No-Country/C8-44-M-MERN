const { model, Schema } = require("mongoose");
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
    default: "https://i.imgur.com/QrdRA4F.png",
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
      category: {
        type: String,
        required: true,
      },
      experience: {
        type: Number,
        default: 0,
        required: true,
      },
      frequency: {
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
  healthExperience: {
    type: Number,
    default: 0,
    required: false,
  },
  educationExperience: {
    type: Number,
    default: 0,
    required: false,
  },
  experience: { //total
    type: Number,
    default: 0,
    required: false,
  }
});
const userModel = model("users", userSchema);

module.exports = userModel;
