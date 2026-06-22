import { PrismaMariaDb } from "@prisma/adapter-mariadb"

import { PrismaClient } from "../../generated/prisma/client.ts"
import validateEnv from "../utils/validateEnv.ts"

const env = validateEnv()
const adapter = new PrismaMariaDb(env.DATABASE_URL!)
const prisma = new PrismaClient({ adapter })

export default prisma
