import { Router } from 'express';
import { getRooms, getRoom, createRoom, updateRoom, deleteRoom } from '../controllers/room.js';

const router = Router();

router.get('/', getRooms);

router.get('/:id', getRoom);

router.post('/', createRoom);

router.patch('/:id', updateRoom);

router.delete('/:id', deleteRoom);

export default router;
