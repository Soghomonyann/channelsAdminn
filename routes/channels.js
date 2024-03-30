import { Router } from 'express';
import { checkAuth } from '../middlewares/auth.js'
import { checkOwnerChannel } from '../middlewares/channel.js'
import { create, getAll, update, deleteChannel } from '../controllers/channles.js';
const router = Router();

/* GET users listing. */
router.post('/', create);
router.get('/', getAll);
router.put('/:id', checkAuth, checkOwnerChannel, update);
router.delete('/:id', checkAuth, checkOwnerChannel, deleteChannel);

export default router;
