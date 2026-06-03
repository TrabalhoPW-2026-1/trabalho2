import type { Request, Response } from "express";

const index = async (req: Request, res: Response) => { }

const create = async (req: Request, res: Response) => {
    if (req.method === "GET") {
        res.render("major/create");
    } else if (req.method === "POST") {
        res.send(JSON.stringify(req.body, null, 2));
    }
}

const read = async (req: Request, res: Response) => {
    const { id } = req.params
    res.send(id)
}

const update = async (req: Request, res: Response) => { }

const remove = async (req: Request, res: Response) => { }

export default {
    index,
    create,
    read,
    update,
    remove
};
