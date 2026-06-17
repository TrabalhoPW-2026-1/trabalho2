import fs from "fs/promises";
import path from "path";
import type { NextFunction, Request, Response } from "express";

import type { LoggerType } from "./loggerTypes.ts";

export default function logger(type: LoggerType, output: string): (req: Request, res: Response, next: NextFunction) => void {
    return (req: Request, res: Response, next: NextFunction): void => {

        let logEntry: string[] = [`[${new Date().toISOString()}]`, req.method, req.url];

        if (type === "advanced") {
            logEntry.push(req.get("user-agent") || "unknown");
            logEntry.push(req.httpVersion);
        }

        const dirName = path.dirname(output);

        fs.mkdir(dirName, { recursive: true })
            .then(() => fs.appendFile(output, logEntry.join(" ") + "\n"))
            .catch((err) => console.error("Error writing log:", err))
            .finally(() => next());

        fs.writeFile(path.join(dirName, ".gitignore"), "*\n")
            .catch((err) => console.error("Error writing .gitignore:", err));
    }
}
