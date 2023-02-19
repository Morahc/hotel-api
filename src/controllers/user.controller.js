import * as services from '../services/user.services.js';
import { generateToken } from '../util/jwt.util.js';

export const register = async (req, res, next) => {
  try {
    const user = await services.FindUser(req.body.email);
    if (user) {
      throw { status: 400, message: 'User with email already exists' };
    }

    await services.CreateUser({ ...req.body });

    res.status(201).json({ message: 'User created' });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await services.FindUser(email);
    if (!user) {
      throw { status: 404, message: 'User not found' };
    }
    if (!user.matchPassword(password)) {
      throw { status: 400, message: 'Invalid password' };
    }

    const token = generateToken({ _id: user._id, role: user.role }, { expiresIn: '5d' });

    res.json({ token });
  } catch (error) {
    next(error);
  }
};
