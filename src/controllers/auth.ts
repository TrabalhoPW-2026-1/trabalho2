import type { Request, Response } from "express"

import authService from "../services/auth.ts"
import majorService from "../services/major.ts"

const signup = async (req: Request, res: Response) => {
    if (req.method === "GET") {
        const majors = await majorService.getAllMajors()
        res.render("auth/signup", { majors })
    } else if (req.method === "POST") {
        const { name, email, password, confirmPassword, majorId } = req.body
        if (password !== confirmPassword) {
            const majors = await majorService.getAllMajors()
            res.render("auth/signup", {
                majors,
                name,
                email,
                majorId,
                error: "As senhas não coincidem.",
            })
            return
        }
        try {
            await authService.signup({ name, email, password, majorId })
            res.redirect("/login")
        } catch {
            const majors = await majorService.getAllMajors()
            res.render("auth/signup", {
                majors,
                name,
                email,
                majorId,
                error: "Email já cadastrado ou dados inválidos.",
            })
        }
    }
}

const login = async (req: Request, res: Response) => {
    if (req.method === "GET") {
        res.render("auth/login")
    } else if (req.method === "POST") {
        const data = req.body
        const user = await authService.login(data)
        if (!user) {
            res.render("auth/login", { error: "Email ou senha inválidos." })
            return
        }
        req.session.userId = user.id
        req.session.userName = user.name
        res.redirect("/game/play")
    }
}

const logout = (req: Request, res: Response) => {
    req.session.destroy(() => {
        res.redirect("/login")
    })
}

export default {
    signup,
    login,
    logout,
}
