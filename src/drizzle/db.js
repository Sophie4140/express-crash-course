const { drizzle } = require("drizzle-orm/postgres-js");
const schema = require("./schema");
const postgres = require("postgres");
require("dotenv/config");

const client = postgres(process.env.DATABASE_URL);

const db = drizzle(client, { schema, logger: true });

module.exports = {
  db,
};
