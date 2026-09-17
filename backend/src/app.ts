import cors from "cors";
import express from "express";
import { gameRouter } from "./gameRouter.js";

export const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  }),
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, game: "gap-runner" });
});

app.use("/api", gameRouter);
