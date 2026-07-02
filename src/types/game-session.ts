import type { GameSession } from "../../generated/prisma/client.ts";

export type CreateGameSessionDTO = Pick<GameSession, "userId" | "score" | "difficulty">;
export type UpdateGameSessionDTO = Pick<GameSession, "userId" | "score" | "difficulty">;