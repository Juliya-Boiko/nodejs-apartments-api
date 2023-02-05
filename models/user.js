const { Schema, model } = require('mongoose');
const { handleErrors } = require('../helpers');

const userSchema = Schema({
  email: {
    type: String, 
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String, 
    minLength: 6,
    required: [true, 'Password is required'],
  }
}, { versionKey: false, timestamps: true });

userSchema.post("save", handleErrors);

const User = model('user', userSchema);

module.exports = User;