import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

const UploadsTable = pgTable('uploads', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  publicId: text('public_id').notNull(),
  url: text('url').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .notNull()
    .$onUpdate(() => {
      return new Date()
    }),
})

export default UploadsTable
