// src/routes/showroomRoutes.ts
import express, { Request, Response } from 'express';
import { Showroom } from '../models/showroom';
import { Vehicle } from '../models/vehicle';
import { fetchShowrooms, topShowroomsByLocation } from '../services/showroomService';
import { fetchShowroomWithVehicles } from '../services/commonService';

const router = express.Router();

router.get('/top/:location', async (req: Request, res: Response) => {
  try {
    const { location } = req.params;
    const showrooms = await topShowroomsByLocation(location); // Pass location to the fetchShowrooms function
    res.json(showrooms);
  } catch (err) {
    console.error('Failed to fetch top showrooms by location', err);
    res.status(500).send('Server error');
  }
});

router.get('/:location', async (req: Request, res: Response) => {
  try {
    const { location } = req.params;
    const showrooms = await fetchShowroomWithVehicles(location);
    res.json(showrooms);
  } catch (err) {
    console.error('Failed to fetch details for location', err);
    res.status(500).send('Server error');
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
      const showrooms = await fetchShowrooms();
      res.json(showrooms);
  } catch (err) {
      console.error('Failed to fetch showrooms', err);
      res.status(500).send('Server error');
  }
});

export default router;
