import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { HealthStatusSchema, ReadinessStatusSchema } from "@3dasset/shared";
import { healthService } from "./service.js";

export const healthRoutes: FastifyPluginAsyncZod = async (fastify) => {
  fastify.get(
    "/healthz",
    {
      schema: {
        summary: "Liveness probe",
        response: {
          200: HealthStatusSchema,
        },
      },
    },
    async (_request, reply) => {
      const data = healthService.getHealth();
      return reply.code(200).send(data);
    }
  );

  fastify.get(
    "/readyz",
    {
      schema: {
        summary: "Readiness probe",
        response: {
          200: ReadinessStatusSchema,
          503: ReadinessStatusSchema,
        },
      },
    },
    async (_request, reply) => {
      const data = await healthService.getReadiness();
      const statusCode = data.status === "ready" ? 200 : 503;
      return reply.code(statusCode).send(data);
    }
  );
};
