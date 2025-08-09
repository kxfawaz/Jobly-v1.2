"use strict";

const { Client } = require("pg");
require("dotenv").config();

const db = new Client({
  host: process.env.HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  user: process.env.USERNAME || "testuser",
  password: process.env.PASSWORD || "password",
  database: process.env.DATABASE || "jobly",
});

db.connect();

module.exports = db;
