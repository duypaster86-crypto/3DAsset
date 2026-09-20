import dotenv from "dotenv";
import { buildApp } from "./app.js";
import { logger } from "./platform/logger.js";

dotenv.config();

const port = Number(process.env.PORT) || 4000;
const host = process.env.HOST || "0.0.0.0";

async function start() {
  try {
    const app = await buildApp();
    await app.listen({ port, host });
    logger.info(`🚀 API Server running at http://${host === "0.0.0.0" ? "localhost" : host}:${port}`);
  } catch (err) {
    logger.error(err, "Failed to start API server");
    process.exit(1);
  }
}

start();
