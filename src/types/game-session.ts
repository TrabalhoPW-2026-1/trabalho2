import type { GameSession } from "../../generated/prisma/client.ts";

export type CreateGameSessionDTO = Pick<GameSession, "userId" | "score">;
export type UpdateGameSessionDTO = Pick<GameSession, "userId" | "score">;