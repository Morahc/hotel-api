import User from '../models/user.models.js';

export const FindUser = async (email) => {
  try {
    const user = await User.findOne({ email })
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const CreateUser = async (input) => {
  try {
    await User.create(input);
  } catch (error) {
    console.log(error);
  }
};
