import { Router } from "express";
import {
  answerQuestion,
  getConnectorById,
  getConnectorsCatalog,
  getEverFamilyGuide,
  getMatchPairs,
  getPhrasalVerbById,
  getPhrasalVerbMatchPairs,
  getPhrasalVerbQuiz,
  getPhrasalVerbsCatalog,
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

// Guia Especial da Família -Ever (Whatever, Whenever, Wherever, Whoever, However)
gameRouter.get("/special/ever-family", (_req, res) => {
  res.json(getEverFamilyGuide());
});

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

gameRouter.post("/sessions", (req, res) => {
  try {
    const body = (req.body ?? {}) as StartGameBody;
    res.status(201).json(startGame(body));
  } catch (err) {
    res.status(400).json({
      error: err instanceof Error ? err.message : "Não foi possível iniciar a sessão de prática.",
    });
  }
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

// ==========================================
// PHRASAL VERBS API ENDPOINTS
// ==========================================
gameRouter.get("/phrasal-verbs", (req, res) => {
  const search = typeof req.query.search === "string" ? req.query.search : undefined;
  const level = typeof req.query.level === "string" ? req.query.level : undefined;
  const category = typeof req.query.category === "string" ? req.query.category : undefined;
  const verbs = getPhrasalVerbsCatalog({ search, level, category });
  res.json({ total: verbs.length, verbs });
});

gameRouter.get("/phrasal-verbs/match-pairs", (req, res) => {
  const count = Number(req.query.count ?? 6);
  const level = typeof req.query.level === "string" ? req.query.level : undefined;
  const pairs = getPhrasalVerbMatchPairs(Number.isFinite(count) ? count : 6, level);
  res.json({ pairs });
});

gameRouter.get("/phrasal-verbs/quiz", (req, res) => {
  const count = Number(req.query.count ?? 10);
  const level = typeof req.query.level === "string" ? req.query.level : undefined;
  const questions = getPhrasalVerbQuiz(Number.isFinite(count) ? count : 10, level);
  res.json({ total: questions.length, questions });
});

gameRouter.get("/phrasal-verbs/:id", (req, res) => {
  const verb = getPhrasalVerbById(routeId(req.params.id));
  if (!verb) {
    res.status(404).json({ error: "Phrasal Verb not found" });
    return;
  }
  res.json(verb);
});


