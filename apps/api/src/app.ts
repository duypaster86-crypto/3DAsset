import fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import { logger } from "./platform/logger.js";
import { registerHealthFeature } from "./features/health/index.js";

export async function buildApp() {
  const app = fastify({
    loggerInstance: logger,
  }).withTypeProvider<ZodTypeProvider>();

  // Cấu hình compiler Zod
  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  // Bảo mật HTTP & CORS
  await app.register(helmet, { contentSecurityPolicy: false });
  await app.register(cors, {
    origin: true,
    credentials: true,
  });

  // Đăng ký features
  await registerHealthFeature(app);

  return app;
}
