import { Router } from 'express';

import { AuthController } from '../../controllers';
import { userVerification } from '../../middleware';

const router = Router();
const { createUser, loginUser, logoutUser } = AuthController;

router.post('/signup', createUser);
router.post('/login', loginUser);
router.post('/', userVerification)

export default router;