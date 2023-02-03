const { Schema, model } = require('mongoose');
const { handleErrors } = require('../helpers');

// const emailRegexp = /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3 }$/

const userSchema = Schema({
  email: {
    type: String, 
    // match: emailRegexp,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String, 
    minlength: 6,
    required: [true, 'Password is required'],
  }
}, { versionKey: false, timestamps: true });

userSchema.post("save", handleErrors);

const User = model('user', userSchema);

module.exports = User;