import prisma from "../utils/prismaClient.ts";
import type { Difficulty } from "../../generated/prisma/enums.ts";
import type {CreateGameSessionDTO, UpdateGameSessionDTO} from "../types/game-session.ts";


function getAllGameSessions() {
  return prisma.gameSession.findMany({ include: { user: true } });
}

function getGameSessionsFromUserId(userId: string) {
    return prisma.gameSession.findMany({
        where: { userId } });
}

async function getRanking(limit: number, difficulty: Difficulty) {
    const top = await prisma.gameSession.groupBy({
        by: ['userId'],
        where: { difficulty },
        _max: { score: true },
        orderBy: { _max: { score: 'desc' } },
        take: limit,
    });
    const users = await prisma.user.findMany({
        where: { id: { in: top.map((t) => t.userId) } },
        select: { id: true, name: true },
    });
    const nameById = new Map(users.map((u) => [u.id, u.name]));
    return top.map((t, i) => ({
        position: i + 1,
        name: nameById.get(t.userId) ?? t.userId,
        score: t._max.score ?? 0,
    }));
}

function readGameSession(id: string) {
    return prisma.gameSession.findUnique({
        where: { id } });
}

function createGameSession(data: CreateGameSessionDTO) {
    return prisma.gameSession.create({ data });
}

function updateGameSession(id: string, data: UpdateGameSessionDTO) {
    return prisma.gameSession.update({ where: { id }, data });
}

function deleteGameSession(id: string) {
    return prisma.gameSession.delete({ where: { id } });
}

function deleteGameSessionsForUserId(userId: string) {
    return prisma.gameSession.deleteMany({
        where: { userId }
    });
}

export default {
    getAllGameSessions,
    getGameSessionsFromUserId,
    getRanking,
    readGameSession,
    createGameSession,
    updateGameSession,
    deleteGameSession,
    deleteGameSessionsForUserId
}