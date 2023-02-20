import Room from '../models/room.model.js';

export const getRoom = async (filter) => {
  try {
    return await Room.find(filter).populate('roomType', 'name -_id');
  } catch (error) {
    console.log(error)
    throw { status: 400, message: "Couldn't fetch rooms" };
  }
};

export const getRoomById = async (id) => {
  try {
    return await Room.findById(id);
  } catch (error) {
    throw { status: 404, message: 'Room was not found' };
  }
};

export const createRoom = async (input) => {
  try {
    await Room.create(input);
  } catch (error) {
    throw Error({ status: 400, message: "Room couldn't be created" });
  }
};

export const updateRoom = async (id, update) => {
  try {
    await Room.findByIdAndUpdate(id, update);
  } catch (error) {
    if (error.name == 'CastError') {
      throw { message: `Room with id ${id} doesn't exist`, status: 404 };
    } else {
      throw Error({ status: 400, message: "Room couldn't be updated" });
    }
  }
};

export const deleteRoom = async (id) => {
  try {
    await Room.findByIdAndDelete(id);
  } catch (error) {
    if (error.name == 'CastError') {
      throw { message: `Room with id ${id} doesn't exist`, status: 404 };
    } else {
      throw Error({ status: 400, message: "Room couldn't be deleted" });
    }
  }
};
