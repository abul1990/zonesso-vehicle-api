import pool from '../db';
import { Showroom } from '../models/showroom';

export async function fetchShowroomWithVehicles(
  location: string
): Promise<Showroom[]> {
  try {
    const query = `
        SELECT s.id AS showroom_id, s.name AS showroom_name, s.location AS showroom_location, 
               v.id AS vehicle_id, v.type AS vehicle_type, v.brand AS vehicle_brand, v.model AS vehicle_model, v.year AS vehicle_year, v.price AS vehicle_price, v.description AS vehicle_description, v.details AS vehicle_details
        FROM showroom s
        INNER JOIN vehicle v ON s.id = v.showroom_id
        WHERE s.location = $1;
      `;
    const { rows } = await pool.query(query, [location]);

    // Group vehicles by showroom ID
    const showroomMap = new Map<number, Showroom>();
    rows.forEach((row) => {
      const {
        showroom_id,
        showroom_name,
        showroom_location,
        vehicle_id,
        vehicle_type,
        vehicle_brand,
        vehicle_model,
        vehicle_year,
        vehicle_price,
        vehicle_details,
        vehicle_description
      } = row;
      if (!showroomMap.has(showroom_id)) {
        showroomMap.set(showroom_id, {
          id: showroom_id,
          name: showroom_name,
          location: showroom_location,
          vehicles: [],
        });
      }
      //@ts-ignore
      showroomMap.get(showroom_id)?.vehicles.push({
        id: vehicle_id,
        type: vehicle_type,
        brand: vehicle_brand,
        model: vehicle_model,
        year: vehicle_year,
        price: vehicle_price,
        details: vehicle_details,
        description: vehicle_description
      });
    });

    // Convert Map values to array
    const showrooms: Showroom[] = Array.from(showroomMap.values());
    return showrooms;
  } catch (err) {
    console.error('Error executing query', err);
    throw err;
  }
}
