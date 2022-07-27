import 'dotenv/config';
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

pool.on('error', (err: any, client: any) => {
  console.log(client);
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export default pool;
