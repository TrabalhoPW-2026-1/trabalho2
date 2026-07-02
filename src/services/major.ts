import prisma from "../utils/prismaClient.ts";
// import { PrismaMariaDb } from "@prisma/adapter-mariadb";

import { type Major } from "../../generated/prisma/client.ts";
import type { CreateMajorDTO, UpdateMajorDTO } from "../types/major.ts";
// import validateEnv from "../utils/validateEnv.ts";

// const env = validateEnv();
// const adapter = new PrismaMariaDb(env.DATABASE_URL!);
// const prisma = new PrismaClient({ adapter });

function getAllMajors(): Promise<Major[]> {
    return prisma.major.findMany();
}

function createMajor(data: CreateMajorDTO): Promise<Major> {
    return prisma.major.create({ data });
}

function readMajor(id: string): Promise<Major | null> {
    return prisma.major.findUnique({ where: { id } });
}

function updateMajor(id: string, data: UpdateMajorDTO): Promise<Major> {
    return prisma.major.update({ where: { id }, data });
}

function deleteMajor(id: string): Promise<Major> {
    return prisma.major.delete({ where: { id } });
}

export default { getAllMajors, createMajor, readMajor, updateMajor, deleteMajor };

