const { pgTable, uuid, varchar, integer } = require("drizzle-orm/pg-core");
const UserTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 225 }).notNull(),
  age: integer("age").notNull(),
});
module.exports = { UserTable };
