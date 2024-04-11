// src/routes/index.ts
import express from 'express';
import vehicleRoutes from './vehicleRoutes';
import showroomRoutes from './showroomRoutes';

const router = express.Router();

router.use('/vehicles', vehicleRoutes);
router.use('/showrooms', showroomRoutes);

export default router;
