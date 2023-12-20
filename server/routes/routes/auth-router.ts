import { Router } from 'express';

import { AuthController } from '../../controllers';

const router = Router();

router.post('/signup', AuthController.createUser);

export default router;