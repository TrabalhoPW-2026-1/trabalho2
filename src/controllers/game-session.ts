import type { Request, Response } from "express";

import type { CreateGameSessionDTO, UpdateGameSessionDTO } from "../types/game-session.ts";
import gameSession from "../services/game-session.ts";

const index = async (req: Request, res: Response) => {
    const gameSessions = await gameSession.getAllGameSessions();
    res.render("game-session/index", { gameSessions });
}

const create = async (req: Request, res: Response) => {
    if (req.method === "GET") {
        res.render("game-session/create");
    } else if (req.method === "POST") {
        const gameSessionData: CreateGameSessionDTO = { ...req.body, score: Number(req.body.score) };
        try {
            await gameSession.createGameSession(gameSessionData);
            res.redirect("/game-session");
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default {
    index,
    create,
}