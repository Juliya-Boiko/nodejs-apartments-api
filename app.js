const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
// const swaggerUi = require("swagger-ui-express");
// const swaggerSpec = require('./swagger');

const authRouter = require('./routes/api/auth');
const apartmentsRouter = require('./routes/api/apartments');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use('/api/auth', authRouter);
app.use('/api/apartments', apartmentsRouter);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server ERROR' } = err;
  res.status(status).json({ message });
});

module.exports = app;