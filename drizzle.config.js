const { defineConfig } = require("drizzle-kit");
require("dotenv/config");

export default defineConfig({
  schema: "./src/drizzle/schema.js",
  out: "./src/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
