import { Router } from 'express';

import { AuthController } from '../../controllers';

const router = Router();
const { createUser, loginUser, getUser } = AuthController;

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/:username', getUser)

export default router;