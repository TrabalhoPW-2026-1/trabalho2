import type { Request, Response } from "express"

import gameSession from "../services/game-session.ts"

const play = (req: Request, res: Response) => {
    res.render("game/play")
}

const saveScore = async (req: Request, res: Response) => {
    const score = Number(req.body.score)
    if (!Number.isFinite(score)) {
        res.status(400).json({ success: false, error: "Invalid score" })
        return
    }
    const userId = req.session.userId!
    try {
        await gameSession.createGameSession({ userId, score })
        res.json({ success: true })
    } catch (error) {
        res.status(500).json({ success: false, error })
    }
}

export default { play, saveScore }
