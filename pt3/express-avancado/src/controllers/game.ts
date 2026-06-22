import type { Request, Response } from "express"

const play = (req: Request, res: Response) => {
    res.render("start")
}

export default {
    play
}