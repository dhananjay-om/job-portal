import express from 'express';
import userAuth from '../middelwares/authMiddleware.js';
import { createJobController, deleteJobController, getAllJobsController, JobStatsController, updateJobController } from '../controllers/JobsController.js';

const router= express.Router();

//routes
//CREATE JOB

router.post('/createJob', userAuth,createJobController);

// GET JOBS || GET

router.get('/get-job',userAuth,getAllJobsController);

//UPDATE JOBS || PUT ||  PATCH

router.patch('/update-job/:id',userAuth,updateJobController);

//DELETE JOBS || DELETE 
router.delete('/delete-job/:id',userAuth,deleteJobController);

//JOB STATS FILTER || GET
router.get('/job-stats',userAuth,JobStatsController);

export default router