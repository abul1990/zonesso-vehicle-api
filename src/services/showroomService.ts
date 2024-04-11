import pool from '../db'; 

export async function fetchShowrooms(): Promise<any[]> {
  try {
    const { rows } = await pool.query('SELECT * FROM showroom');
    return rows;
  } catch (err) {
    console.error('Error executing query', err);
    throw err; 
  }
}

export async function topShowroomsByLocation(location: string): Promise<any[]> {
    try {
      const query = 'SELECT * FROM showroom WHERE location = $1 LIMIT 3'; 
      const { rows } = await pool.query(query, [location]);
      return rows;
    } catch (err) {
      console.error('Error executing query', err);
      throw err;
    }
  }