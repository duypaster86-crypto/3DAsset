import { FastifyInstance } from "fastify";
import { healthRoutes } from "./routes.js";

export { healthService } from "./service.js";

export async function registerHealthFeature(app: FastifyInstance<any, any, any, any, any>) {
  await app.register(healthRoutes);
}
