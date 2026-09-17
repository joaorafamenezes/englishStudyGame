import { Router } from "express";
import {
  answerQuestion,
  getConnectorById,
  getConnectorsCatalog,
  getMatchPairs,
  getSession,
  getSummary,
  startGame,
} from "./gameService.js";
import type { AnswerBody, StartGameBody } from "./types.js";

export const gameRouter = Router();

function routeId(value: string | string[] | undefined): string {
  const id = Array.isArray(value) ? value[0] : value;
  return id ?? "";
}

// Catálogo dos 81 conectivos com busca e filtro por família
gameRouter.get("/connectors", (req, res) => {
  const search = typeof req.query.search === "string" ? req.query.search : undefined;
  const family = typeof req.query.family === "string" ? req.query.family : undefined;
  const connectors = getConnectorsCatalog({ search, family });
  res.json({ total: connectors.length, connectors });
});

gameRouter.get("/connectors/:id", (req, res) => {
  const connector = getConnectorById(routeId(req.params.id));
  if (!connector) {
    res.status(404).json({ error: "Connector not found" });
    return;
  }
  res.json(connector);
});

// Modo de Associação Rápida (Match Pairs)
gameRouter.get("/match-pairs", (req, res) => {
  const count = Number(req.query.count ?? 6);
  const pairs = getMatchPairs(Number.isFinite(count) ? count : 6);
  res.json({ pairs });
});

// Gap Runner (Arcade) Sessões
gameRouter.post("/sessions", (req, res) => {
  const body = (req.body ?? {}) as StartGameBody;
  res.status(201).json(startGame(body));
});

gameRouter.get("/sessions/:id", (req, res) => {
  const session = getSession(routeId(req.params.id));
  if (!session) {
    res.status(404).json({ error: "Session not found" });
    return;
  }
  res.json(session);
});

gameRouter.post("/sessions/:id/answers", (req, res) => {
  const body = (req.body ?? {}) as AnswerBody;
  const outcome = answerQuestion(routeId(req.params.id), body);
  if ("error" in outcome) {
    res.status(outcome.status).json({ error: outcome.error });
    return;
  }
  res.json(outcome.result);
});

gameRouter.get("/sessions/:id/summary", (req, res) => {
  const summary = getSummary(routeId(req.params.id));
  if (!summary) {
    res.status(404).json({ error: "Session not found" });
    return;
  }
  res.json(summary);
});

