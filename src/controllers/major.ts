import type { Request, Response } from "express";

import type { CreateMajorDTO, UpdateMajorDTO } from "../types/major.ts";
import major from "../services/major.ts";

const index = async (req: Request, res: Response) => {
    const majors = await major.getAllMajors();
    res.render("major/index", { majors });
}

const create = async (req: Request, res: Response) => {
    if (req.method === "GET") {
        res.render("major/create");
    } else if (req.method === "POST") {
        // res.send(JSON.stringify(req.body, null, 2));
        const majorData: CreateMajorDTO = req.body;
        try {
            await major.createMajor(majorData);
            res.redirect("/major");
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

const read = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    try {
        const majorData = await major.readMajor(id);
        if (majorData) {
            res.render("major/read", { major: majorData });
        } else {
            res.status(404).send({ message: "Major not found" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const update = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    if (req.method === "GET") {
        try {
            const majorData = await major.readMajor(id);
            if (majorData) {
                res.render("major/update", { major: majorData });
            } else {
                res.status(404).send({ message: "Major not found" });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    } else if (req.method === "POST") {
        const majorData: UpdateMajorDTO = req.body;
        try {
            await major.updateMajor(id, majorData);
            res.redirect("/major");
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

const delete_ = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    try {
        await major.deleteMajor(id);
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
    delete_
};
