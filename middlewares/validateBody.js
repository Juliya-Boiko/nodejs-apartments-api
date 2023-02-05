const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      next(error);
      return;
    }
    next();
  };
  return func;
};

module.exports = validateBody;