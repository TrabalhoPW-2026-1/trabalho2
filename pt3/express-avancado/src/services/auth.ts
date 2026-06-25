import bcrypt from "bcryptjs"

// import { PrismaMariaDb } from "@prisma/adapter-mariadb"
import { type User } from "../../generated/prisma/client.ts"
import validateEnv from "../utils/validateEnv.ts"
import type { SignUpDTO, LogInDTO } from "../types/auth.ts"
import prisma from "../utils/prismaClient.ts"

const env = validateEnv()
// const adapter = new PrismaMariaDb(env.DATABASE_URL!)
// const prisma = new PrismaClient({ adapter })

async function signup(data: SignUpDTO): Promise<User> {
    const salt = await bcrypt.genSalt(env.BCRYPT_ROUNDS)
    // const password = await bcrypt.hash(data.password, salt)
    const hash = await bcrypt.hash(data.password, salt)
    return prisma.user.create({ data: { ...data, hash } })
}

// Dummy hash prevents timing attacks: attacker can't tell if user exists by response time
const DUMMY_HASH =
    "$2a$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ012345"

async function login(data: LogInDTO): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { email: data.email } })
    const hash = user ? user.password : DUMMY_HASH
    const match = await bcrypt.compare(data.password, hash)
    return user && match ? user : null
}

export default {
    signup,
    login,
}
