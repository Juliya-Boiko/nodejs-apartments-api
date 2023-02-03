const { RequestError } = require('../helpers');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;
const User = require('../models/user');

const authenticate = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== 'Bearer') {
      throw RequestError(401, "Not authorized"); 
    };
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user) {
      throw RequestError(404, `User with id=${id} not found`); 
    };
    req.user = user;
    next();
  } catch (error) {
    if (!error.status) {
      error.status = 401;
      error.message = "Not authorized";
    }
    next(error);
  }
};

module.exports = authenticate;