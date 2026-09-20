import { z } from "zod";

// --- Health Schemas ---
export const HealthStatusSchema = z.object({
  status: z.literal("ok"),
  timestamp: z.string().datetime(),
  uptime: z.number(),
});

export type HealthStatus = z.infer<typeof HealthStatusSchema>;

export const ReadinessStatusSchema = z.object({
  status: z.enum(["ready", "degraded", "error"]),
  timestamp: z.string().datetime(),
  database: z.object({
    connected: z.boolean(),
    latencyMs: z.number().optional(),
    details: z.string().optional(),
  }),
});

export type ReadinessStatus = z.infer<typeof ReadinessStatusSchema>;

// --- System Error Codes ---
export const ErrorCodes = {
  BAD_REQUEST: "BAD_REQUEST",
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  NOT_FOUND: "NOT_FOUND",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  SERVICE_UNAVAILABLE: "SERVICE_UNAVAILABLE",
} as const;

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];
