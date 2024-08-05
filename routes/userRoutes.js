import express  from 'express';
import userAuth from '../middelwares/authMiddleware.js';
import { getUserProfile, updateserController } from '../controllers/userController.js';
//route object
const router=express.Router();

//route
//GET /users || GET

//UPDATE /users || PUT
router.put('/update-user',userAuth, updateserController);

//GET USER PROFILE || GET

router.get('/user-profile',userAuth,getUserProfile);

export default router;
