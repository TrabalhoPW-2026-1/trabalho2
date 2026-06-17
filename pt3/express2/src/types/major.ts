import type { Major } from "../../generated/prisma/client.ts";

export type CreateMajorDTO = Pick<Major, "name" | "code" | "description">;
export type UpdateMajorDTO = Pick<Major, "name" | "code" | "description">;
