const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Email is wrong");
  };
  const passCompare = await bcrypt.compareSync(password, user.password);
  if (!passCompare ) {
    throw new Error("Password is wrong");
  };
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "3h" });
  await User.findByIdAndUpdate(user._id, {token});
  res.status(200).json({
    message: 'Login successful',
    token: token,
    user: {
      email: user.email,
    }
  });
};

module.exports = login;