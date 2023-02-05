const express = require('express');
const authRouter = express.Router();
const { registerSchema, loginSchema } = require('../../shemas/auth');
const { validateBody } = require('../../middlewares');
const { controllerWrapper } = require('../../helpers');
const { register, login } = require('../../controllers/auth');

authRouter.post('/register', validateBody(registerSchema), controllerWrapper(register));

authRouter.post('/login', validateBody(loginSchema), controllerWrapper(login));

module.exports = authRouter;
