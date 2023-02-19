import Joi from 'joi';

export const createRoomSchema = Joi.object()
  .keys({
    name: Joi.string().required(),
    roomType: Joi.string().required(),
    price: Joi.number().required(),
  })
  .required();

