import type { Request, Response } from "express"

import { Difficulty } from "../../generated/prisma/enums.ts"
import gameSession from "../services/game-session.ts"

const play = (req: Request, res: Response) => {
    res.render("game/play")
}

const saveScore = async (req: Request, res: Response) => {
    const score = Number(req.body.score)
    const difficulty = req.body.difficulty
    if (!Number.isFinite(score) || !Object.values(Difficulty).includes(difficulty)) {
        res.status(400).json({ success: false, error: "Invalid score or difficulty" })
        return
    }
    const userId = req.session.userId!
    try {
        await gameSession.createGameSession({ userId, score, difficulty })
        res.json({ success: true })
    } catch (error) {
        res.status(500).json({ success: false, error })
    }
}

export default { play, saveScore }
