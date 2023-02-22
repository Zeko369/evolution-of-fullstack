import path from "node:path";
import express from "express";
import { PrismaClient } from "../../prisma/prisma/generated/client/index.js";

const app = express();
const db = new PrismaClient();

app.set("view engine", "ejs");
app.set("views", path.join(path.dirname(new URL(import.meta.url).pathname), "views"));

app.get("/", async (req, res) => {
  const posts = await db.post.findMany();
  res.render("index", { posts });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
