import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    fname: Joi.string().min(4).optional(),
    lname: Joi.string().min(4).optional(),
    email: Joi.string().min(4).required(),
    password: Joi.string().min(1).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
