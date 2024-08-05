import express from 'express';
import { testPostController } from '../controllers/testControllers.js';
import userAuth from '../middelwares/authMiddleware.js';

//router object
const router = express.Router();

//route

router.post('/test-post',userAuth,testPostController);
//export

export default router;