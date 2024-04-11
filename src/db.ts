import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'vehicle',
  password: 'vehicle',
  port: 5432,
});

export default pool;
