import bcrypt from "bcryptjs"

import { PrismaMariaDb } from "@prisma/adapter-mariadb"
import { type User, PrismaClient } from "../../generated/prisma/client.ts"
import validateEnv from "../utils/validateEnv.ts"

const env = validateEnv()
const adapter = new PrismaMariaDb(env.DATABASE_URL!)
const prisma = new PrismaClient({ adapter })

async function signup(name: string, email: string, password: string, majorId: string): Promise<User> {
    const hash = await bcrypt.hash(password, 10)
    return prisma.user.create({ data: { name, email, password: hash, majorId } })
}

async function login(email: string, password: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) return null
    const match = await bcrypt.compare(password, user.password)
    return match ? user : null
}

export default { signup, login }
