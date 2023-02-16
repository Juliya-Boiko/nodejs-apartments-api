const express = require('express');
const authRouter = express.Router();
const { registerSchema, loginSchema } = require('../../shemas/auth');
const { validateBody, authenticate } = require('../../middlewares');
const { controllerWrapper } = require('../../helpers');
const { registerUser, loginUser, logoutUser } = require('../../controllers/auth');

authRouter.post('/register', validateBody(registerSchema), controllerWrapper(registerUser));

authRouter.post('/login', validateBody(loginSchema), controllerWrapper(loginUser));

authRouter.post('/logout', authenticate, controllerWrapper(logoutUser));

module.exports = authRouter;
