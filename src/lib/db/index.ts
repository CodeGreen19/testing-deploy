// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";
// import * as schema from "../../lib/schema/schema";

// const sql = neon(process.env.DATABASE_URL!);
// export const db = drizzle(sql, { schema });

//.......................................................
// new code

import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import { drizzle } from "drizzle-orm/neon-serverless";
import * as schema from "@/lib/schema/schema";

// In Node environments where WebSocket isn’t defined globally,
// you must provide a WebSocket constructor.
neonConfig.webSocketConstructor = ws;

// Create a connection pool with your Neon connection string.
const pool = new Pool({ connectionString: process.env.DATABASE_URL! });

// Initialize Drizzle ORM with the pool and your schema.
export const db = drizzle({ client: pool, schema });
