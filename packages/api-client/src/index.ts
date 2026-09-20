import {
  HealthStatus,
  HealthStatusSchema,
  ReadinessStatus,
  ReadinessStatusSchema,
} from "@3dasset/shared";

export interface ApiClientConfig {
  baseUrl: string;
  fetchFn?: typeof fetch;
}

export class ApiClient {
  private baseUrl: string;
  private fetch: typeof fetch;

  constructor(config: ApiClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/+$/, "");
    this.fetch = config.fetchFn || (globalThis.fetch ? globalThis.fetch.bind(globalThis) : fetch);
  }

  async getHealth(): Promise<HealthStatus> {
    const res = await this.fetch(`${this.baseUrl}/healthz`);
    if (!res.ok) {
      throw new Error(`Health check failed with status: ${res.status}`);
    }
    const data = await res.json();
    return HealthStatusSchema.parse(data);
  }

  async getReadiness(): Promise<ReadinessStatus> {
    const res = await this.fetch(`${this.baseUrl}/readyz`);
    const data = await res.json();
    return ReadinessStatusSchema.parse(data);
  }
}

export const createApiClient = (baseUrl = "http://localhost:4000"): ApiClient => {
  return new ApiClient({ baseUrl });
};
