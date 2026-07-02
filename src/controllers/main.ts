import type { Request, Response } from "express";
import { LoremIpsum } from "lorem-ipsum";

import type { Professor, Technology } from "../views/helpers/helper.ts";
import gameSession from "../services/game-session.ts";

const loremIpsum = new LoremIpsum();

const home = (req: Request, res: Response) => {
    res.redirect("/game/play");
};

const testCookie = (req: Request, res: Response) => {
    if ("name-user" in req.cookies) {
        res.send(`O valor do cookie name-user é ${req.cookies["name-user"]}`);
    } else {
        res.cookie("name-user", "Cadunandro", {
            httpOnly: true, // impossibilita de ver no console (JS)
            maxAge: 360_000, // ms = 6 min
        });
        res.send("Cookie criado!");
    }
};

const about = (req: Request, res: Response) => {
    res.render("main/about", {
        title: "Sobre o Jogo"
    });
};

const api = (req: Request, res: Response) => {
    res.send("Envio de dados da API!");
};

const user = (req: Request, res: Response) => {
    res.send(`Hi, ${req.params.name}!`);
};

const search = (req: Request, res: Response) => {
    res.send(`Search: ${req.query.q}`);
};

const redirect = (req: Request, res: Response) => {
    res.redirect("http://expressjs.com");
};

const json = (req: Request, res: Response) => {
    res.json({ name: "John", age: 30 });
};

const download = (req: Request, res: Response) => {
    res.download("package.json");
};

const lorem = (req: Request, res: Response) => {
    const n = parseInt(req.params.n as string, 10);
    const text = loremIpsum.generateParagraphs(n);
    res.send(text);
};

const hb1 = (req: Request, res: Response) => {
    const msg = "Bem-vindo ao Handlebars!";
    res.render("main/hb1", {
        msg,
    });
};

const hb2 = (req: Request, res: Response) => {
    const msg = "Oi!";
    const bemVindo = true;
    res.render("main/hb2", {
        msg,
        bemVindo,
        layout: bemVindo ? "main" : "main2",
    });
};

const hb3 = (req: Request, res: Response) => {
    const profs: Professor[] = [
        {
            name: "Alice",
            subject: "Math",
        },
        {
            name: "Bob",
            subject: "History",
        },
        {
            name: "Charlie",
            subject: "Science",
        },
    ];
    res.render("main/hb3", {
        profs,
    });
};

const hb4 = (req: Request, res: Response) => {
    const technologies: Technology[] = [
        {
            name: "Express",
            type: "Framework",
            poweredByNodejs: true,
        },
        {
            name: "Laravel",
            type: "Framework",
            poweredByNodejs: false,
        },
        {
            name: "React",
            type: "Library",
            poweredByNodejs: true,
        },
        {
            name: "Handlebars",
            type: "Engine View",
            poweredByNodejs: true,
        },
        {
            name: "Django",
            type: "Framework",
            poweredByNodejs: false,
        },
        {
            name: "Docker",
            type: "Virtualization",
            poweredByNodejs: false,
        },
        {
            name: "Sequelize",
            type: "ORM tool",
            poweredByNodejs: true,
        },
    ];
    res.render("main/hb4", {
        technologies,
    });
};

const ranking = async (req: Request, res: Response) => {
    const ranking = await gameSession.getRanking(10);
    res.render("ranking", { ranking });
};

export default {
    home,
    ranking,
    about,
    api,
    user,
    search,
    redirect,
    json,
    download,
    lorem,
    hb1,
    hb2,
    hb3,
    hb4,
    testCookie,
};
