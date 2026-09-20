import { describe, it, expect, vi } from "vitest";
import { createApiClient } from "./index.js";

describe("ApiClient", () => {
  it("fetches health status successfully", async () => {
    const mockHealth = {
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: 42,
    };

    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockHealth,
    });

    const client = createApiClient("http://localhost:4000");
    // @ts-expect-error override fetch for testing
    client.fetch = mockFetch;

    const res = await client.getHealth();
    expect(res.status).toBe("ok");
    expect(res.uptime).toBe(42);
    expect(mockFetch).toHaveBeenCalledWith("http://localhost:4000/healthz");
  });

  it("fetches readiness status successfully", async () => {
    const mockReadiness = {
      status: "ready",
      timestamp: new Date().toISOString(),
      database: {
        connected: true,
      },
    };

    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockReadiness,
    });

    const client = createApiClient("http://localhost:4000");
    // @ts-expect-error override fetch for testing
    client.fetch = mockFetch;

    const res = await client.getReadiness();
    expect(res.status).toBe("ready");
    expect(res.database.connected).toBe(true);
    expect(mockFetch).toHaveBeenCalledWith("http://localhost:4000/readyz");
  });
});
