const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: [true, "Id already in use"]
    },
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,

  },


}, { collection: 'Login'})

module.exports = mongoose.model('Login', loginSchema)
