import express, { Request, Response } from 'express';
import { getVehicles } from '../services/vehicleService';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const vehicles = await getVehicles();
        res.json(vehicles);
    } catch (err) {
        console.error('Failed to fetch vehicles', err);
        res.status(500).send('Server error');
    }
});

export default router;