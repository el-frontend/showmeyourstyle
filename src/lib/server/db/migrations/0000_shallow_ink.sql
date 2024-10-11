CREATE TABLE IF NOT EXISTS "transformations" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"prompt" varchar(255) NOT NULL,
	"url" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
