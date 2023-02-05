const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const { Conflict } = require('http-errors');

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  };
  const hashPassword = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashPassword });
  res.status(201).json({
    message: 'Registration successful',
    user: {
      email,
    },
  });
};

module.exports = register;