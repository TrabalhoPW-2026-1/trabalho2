import prisma from "../utils/prismaClient.ts";
import type {CreateGameSessionDTO, UpdateGameSessionDTO} from "../types/game-session.ts";


function getAllGameSessions() {
  return prisma.gameSession.findMany();
}

function getGameSessionsFromUserId(userId: string) {
    return prisma.gameSession.findMany({
        where: { userId } });
}

function getTopGameSessions(limit: number) {
    return prisma.gameSession.groupBy({
        by: ['userId'],
        _max: { score: true },
        orderBy: { _max: { score: 'desc' } },
        take: limit,
    });
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
    getTopGameSessions,
    readGameSession,
    createGameSession,
    updateGameSession,
    deleteGameSession,
    deleteGameSessionsForUserId
}