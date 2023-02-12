import RoomType from '../models/roomType.js';

export const getRoomTypes = async () => {
  return await RoomType.find();
};

export const createRoomType = async (input) => {
  return await RoomType.create(input);
};
