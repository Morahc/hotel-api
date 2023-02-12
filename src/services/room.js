import Room from '../models/room.js';

export const getRoom = async (filter) => {
  return await Room.find(filter).populate('roomType', 'name -_id');
};

export const getRoomById = async (id) => {
  return await Room.findById(id);
};

export const createRoom = async (input) => {
  return await Room.create(input);
};

export const updateRoom = async (id, update) => {
  return await Room.findByIdAndUpdate(id, update);
};

export const deleteRoom = async (id) => {
  return await Room.findByIdAndDelete(id);
};
