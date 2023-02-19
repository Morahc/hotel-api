import RoomType from '../models/roomType.model.js';

export const getRoomTypes = async () => {
  try {
    return await RoomType.find();
  } catch (error) {
    throw { status: 400, message: "Could't fetch room types" };
  }
};

export const createRoomType = async (input) => {
  try {
    return await RoomType.create(input);
  } catch (error) {
    console.log(error.name);
    if (error.name == 'ValidationError') {
      throw { status: 400, message: error.message };
    } else {
      throw { status: 400, message: 'Couldn\t create room type' };
    }
  }
};
