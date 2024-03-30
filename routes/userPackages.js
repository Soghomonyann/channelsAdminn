import express from 'express';
import { createUserPachage } from '../controllers/userPackages.js'
const router = express.Router();

/* GET home page. */
router.post('/', createUserPachage);

export default router;
