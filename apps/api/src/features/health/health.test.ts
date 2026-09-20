import { describe, it, expect } from "vitest";
import { buildApp } from "../../app.js";

describe("Health & Readiness API Endpoints", () => {
  it("GET /healthz returns 200 and valid health status", async () => {
    const app = await buildApp();
    const res = await app.inject({
      method: "GET",
      url: "/healthz",
    });

    expect(res.statusCode).toBe(200);
    const body = JSON.parse(res.body);
    expect(body.status).toBe("ok");
    expect(typeof body.uptime).toBe("number");
    expect(typeof body.timestamp).toBe("string");
  });

  it("GET /readyz responds with database connectivity status", async () => {
    const app = await buildApp();
    const res = await app.inject({
      method: "GET",
      url: "/readyz",
    });

    // Code can be 200 (if local postgres is running) or 503 (if not yet running in dev)
    expect([200, 503]).toContain(res.statusCode);
    const body = JSON.parse(res.body);
    expect(["ready", "degraded"]).toContain(body.status);
    expect(body.database).toBeDefined();
  });
});
