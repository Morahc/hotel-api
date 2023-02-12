import { Router } from 'express';
import { getRoomTypes, createRoomType } from '../controllers/roomType.js';

const router = Router();

router.get('/', getRoomTypes);

router.post('/', createRoomType);

export default router;
