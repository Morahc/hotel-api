import { Router } from 'express';
import { getRoomTypes, createRoomType } from '../controllers/roomType.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { isAdmin, isAuth } from '../middlewares/auth.middleware.js';
import { createRoomTypeSchema } from '../schema/roomType.schema.js';

const router = Router();

router.get('/', getRoomTypes);

router.post('/', validate(createRoomTypeSchema), isAuth, isAdmin, createRoomType);

export default router;
