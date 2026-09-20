import { describe, it, expect } from "vitest";
import { HealthStatusSchema, ReadinessStatusSchema, ErrorCodes } from "./index.js";

describe("shared schemas", () => {
  it("validates valid health status", () => {
    const valid = {
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: 123.45,
    };
    const parsed = HealthStatusSchema.parse(valid);
    expect(parsed.status).toBe("ok");
    expect(parsed.uptime).toBe(123.45);
  });

  it("validates valid readiness status", () => {
    const valid = {
      status: "ready",
      timestamp: new Date().toISOString(),
      database: {
        connected: true,
        latencyMs: 5,
        details: "connected",
      },
    };
    const parsed = ReadinessStatusSchema.parse(valid);
    expect(parsed.status).toBe("ready");
    expect(parsed.database.connected).toBe(true);
  });

  it("defines standard error codes", () => {
    expect(ErrorCodes.BAD_REQUEST).toBe("BAD_REQUEST");
    expect(ErrorCodes.INTERNAL_ERROR).toBe("INTERNAL_ERROR");
  });
});
