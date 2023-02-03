const express = require('express');
const authRouter = express.Router();
const authSchemas = require('../../shemas/auth');
const { validateBody } = require('../../middlewares');
const { controllerWrapper } = require('../../helpers');
const authControllers = require('../../controllers/auth');

authRouter.post('/register', validateBody(authSchemas.registerSchema), controllerWrapper(authControllers.register));

authRouter.post('/login', validateBody(authSchemas.loginSchema), controllerWrapper(authControllers.login));

module.exports = authRouter;
