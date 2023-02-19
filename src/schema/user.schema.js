import Joi from 'joi';

export const authSchema = Joi.object()
  .keys({
    password: Joi.string().min(8).max(30).required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid('guest', 'admin')
  })

