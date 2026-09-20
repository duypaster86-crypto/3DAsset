import { HealthStatus, ReadinessStatus } from "@3dasset/shared";
import { pingDatabase } from "../../platform/db.js";

const startTime = Date.now();

export class HealthService {
  getHealth(): HealthStatus {
    return {
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: Math.floor((Date.now() - startTime) / 1000),
    };
  }

  async getReadiness(): Promise<ReadinessStatus> {
    const dbPing = await pingDatabase();
    return {
      status: dbPing.connected ? "ready" : "degraded",
      timestamp: new Date().toISOString(),
      database: dbPing,
    };
  }
}

export const healthService = new HealthService();
