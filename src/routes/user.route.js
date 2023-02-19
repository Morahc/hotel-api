import { Router } from 'express';
import { login, register } from '../controllers/user.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { authSchema } from '../schema/user.schema.js';

const router = Router();

router.post('/register', validate(authSchema), register);

router.post('/login', validate(authSchema), login);

export default router;
