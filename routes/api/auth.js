const express = require('express');
const authRouter = express.Router();
const authSchemas = require('../../shemas/auth');
const { validateBody } = require('../../middlewares');
const { controllerWrapper } = require('../../helpers');
const { register, login } = require('../../controllers/auth');

authRouter.post('/register', validateBody(authSchemas.registerSchema), controllerWrapper(register));

authRouter.post('/login', validateBody(authSchemas.loginSchema), controllerWrapper(login));

module.exports = authRouter;
