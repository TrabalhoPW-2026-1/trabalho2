import type { Request, Response } from "express";

import type { CreateGameSessionDTO, UpdateGameSessionDTO } from "../types/game-session.ts";
import gameSession from "../services/game-session.ts";

const index = async (req: Request, res: Response) => {
    const majors = await gameSession.getAllGameSessions();
    res.render("game-session/index", { majors });
}

const create = async (req: Request, res: Response) => {
    if (req.method === "GET") {
        // res.render("game-session/create");
        res.status(405).send("Method Not Allowed");
    } else if (req.method === "POST") {
        // res.send(JSON.stringify(req.body, null, 2));
        const gameSessionData: CreateGameSessionDTO = req.body;
        try {
            await gameSession.createGameSession(gameSessionData);
            res.redirect("/game-session");
        } catch (error) {
            console.error("Error creating game session:", error);
            res.status(500).send(error);
        }
    }
}

export default {
    index,
    create,
}