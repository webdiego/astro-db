import { defineDb, defineTable, column } from "astro:db";
const Notes = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    author: column.text(),
    body: column.text(),
    createdAt: column.date(),
  },
});
// https://astro.build/db/config
export default defineDb({
  tables: {
    Notes,
  },
});
