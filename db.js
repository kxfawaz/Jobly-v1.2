"use strict";

const { Client } = require("pg");

// Use the connection string when provided (Render/Supabase)
// Fall back to local dev DB if not.
const isProd = process.env.NODE_ENV === "production";

const db = new Client(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        // Supabase/Render need SSL on; the pooler accepts this setting.
        ssl: { rejectUnauthorized: false },
      }
    : {
        connectionString: "postgresql:///jobly", // your local dev DB
      }
);

db.connect();

module.exports = db;