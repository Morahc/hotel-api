import * as services from '../services/roomType.services.js';

export const getRoomTypes = async (req, res, next) => {
  try {
    const rooms = await services.getRoomTypes();
    return res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};

export const createRoomType = async (req, res, next) => {
  const { name } = req.body;
  try {
    if (!name) {
      throw { status: 400, message: 'All fields must be filled' };
    }

    await services.createRoomType({ name });
    return res.status(200).json({ message: 'Room Type created successfully' });
  } catch (error) {
    next(error);
  }
};
