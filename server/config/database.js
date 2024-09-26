import pg from 'pg'

const config = {
    connectionString: process.env.DATABASE_URL,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
}


export const pool = new pg.Pool(config)

// import pg from 'pg';

// const config = {
//   connectionString: process.env.DATABASE_URL, // Using DATABASE_URL from .env
//   ssl: {
//     rejectUnauthorized: false, // Add this for some cloud databases that require SSL
//   },
// };

// export const pool = new pg.Pool(config);
