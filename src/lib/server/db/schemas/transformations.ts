import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

const TransformationsTable = pgTable('transformations', {
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull(),
    prompt: varchar('prompt', {length: 255}).notNull(),
    url: text('url').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull().$onUpdate(() => {
        return new Date();
    }),
});

export default TransformationsTable;