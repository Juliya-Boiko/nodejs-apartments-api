const { Schema, model } = require('mongoose');
const { handleErrors } = require('../helpers');

// const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

const userSchema = Schema({
  email: {
    type: String, 
    // match: emailRegexp,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String, 
   // match: passwordRegexp,
    required: [true, 'Password is required'],
  }
}, { versionKey: false, timestamps: true });

userSchema.post("save", handleErrors);

const User = model('user', userSchema);

module.exports = User;