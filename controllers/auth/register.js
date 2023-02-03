const User = require('../../models/user');
const RequestError = require('../../helpers');
const bcrypt = require('bcryptjs');


const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
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