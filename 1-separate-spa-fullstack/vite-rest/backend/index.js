import { fastify } from "fastify";
import cors from "@fastify/cors";

import { PrismaClient } from "../../../prisma/prisma/generated/client/index.js";

const app = fastify();
const db = new PrismaClient();

app.register(cors);

app.get("/api", async (req, res) => {
  return db.post.findMany();
});

app.listen({ port: 5000 }, (error, endpoint) => {
  console.log(`Listening on ${endpoint}`);
});
