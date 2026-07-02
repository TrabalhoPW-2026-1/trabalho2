import prisma from "../utils/prismaClient.ts";
import { type User } from "../../generated/prisma/client.ts";

function getAllUsers(): Promise<User[]> {
    return prisma.user.findMany();
}

function readUser(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
}

export default { getAllUsers, readUser };
