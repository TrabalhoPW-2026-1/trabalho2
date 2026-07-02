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

const read = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    try {
        const gameSessionData = await gameSession.readGameSession(id);
        if (gameSessionData) {
            res.render("game-session/read", { gameSession: gameSessionData });
        } else {
            res.status(404).send({ message: "Game session not found" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const update = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    if (req.method === "GET") {
        try {
            const gameSessionData = await gameSession.readGameSession(id);
            if (gameSessionData) {
                res.render("game-session/update", { gameSession: gameSessionData });
            } else {
                res.status(404).send({ message: "Game session not found" });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    } else if (req.method === "POST") {
        const gameSessionData: UpdateGameSessionDTO = { ...req.body, score: Number(req.body.score) };
        try {
            await gameSession.updateGameSession(id, gameSessionData);
            res.redirect("/game-session");
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

const delete_ = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    try {
        await gameSession.deleteGameSession(id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
}

export default {
    index,
    create,
    read,
    update,
    delete_,
}
