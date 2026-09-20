import { Kysely, PostgresDialect, sql } from "kysely";
import pg from "pg";
import { logger } from "./logger.js";

const { Pool } = pg;

export interface DatabaseSchema {
  // Bổ sung các bảng nghiệp vụ ở các slice sau
}

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgres://app:app_password@localhost:5432/asset_store_dev",
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 3000,
});

pool.on("error", (err) => {
  logger.error({ err }, "Unexpected PostgreSQL pool error");
});

export const db = new Kysely<DatabaseSchema>({
  dialect: new PostgresDialect({
    pool,
  }),
});

export interface DbPingResult {
  connected: boolean;
  latencyMs?: number;
  details?: string;
}

export async function pingDatabase(): Promise<DbPingResult> {
  const start = Date.now();
  try {
    await sql`SELECT 1`.execute(db);
    const latencyMs = Date.now() - start;
    return {
      connected: true,
      latencyMs,
      details: "PostgreSQL connected and responsive",
    };
  } catch (err: any) {
    const latencyMs = Date.now() - start;
    return {
      connected: false,
      latencyMs,
      details: err?.message || "Failed to connect to PostgreSQL",
    };
  }
}
