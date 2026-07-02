import type { Request, Response, NextFunction } from "express";

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.userId) {
        res.redirect("/login");
        return;
    }
    next();
};

export default requireAuth;
