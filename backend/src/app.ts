import cors from "cors";
import express from "express";
import { gameRouter } from "./gameRouter.js";

export const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, game: "gap-runner" });
});

app.use("/api", gameRouter);
