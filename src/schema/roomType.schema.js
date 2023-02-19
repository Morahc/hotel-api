import Joi from 'joi';

export const createRoomTypeSchema = Joi.object()
  .keys({
    name: Joi.string().required()
  })
  .required();

