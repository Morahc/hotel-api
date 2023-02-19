import { Router } from 'express';
import { getRooms, getRoom, createRoom, updateRoom, deleteRoom } from '../controllers/room.controller.js';
import { createRoomSchema } from '../schema/room.schema.js';
import validate from '../middlewares/validate.middleware.js'
import { isAdmin, isAuth} from '../middlewares/auth.middleware.js'

const router = Router();

router.get('/', getRooms);

router.get('/:id', getRoom);

router.post('/', validate(createRoomSchema), isAuth, isAdmin, createRoom);

router.patch('/:id', isAuth, isAdmin, updateRoom);

router.delete('/:id', isAuth, isAdmin, deleteRoom);

export default router;
