import pool from '../db'; 
export async function getVehicles(): Promise<any[]> {
  try {
    const { rows } = await pool.query('SELECT * FROM vehicle');
    return rows;
  } catch (err) {
    console.error('Error executing query', err);
    throw err; 
  }
}
