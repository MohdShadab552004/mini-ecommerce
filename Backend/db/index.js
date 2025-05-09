import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC NOT NULL,
    description TEXT,
    image_url TEXT
  );
`;

pool
  .connect()
  .then(async (client) => {
    console.log("✅ PostgreSQL connected successfully!");

    await client.query(createTableQuery);
    console.log("✅ Table 'products' created successfully!");

    client.release();
  })
  .catch((err) => {
    console.error("❌ PostgreSQL connection error:", err.message);
  });

export default pool;
