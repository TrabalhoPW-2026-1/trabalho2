import { type User } from "../../generated/prisma/client.ts";

export type SignUpDTO = Pick<User, "name" | "email" | "password" | "majorId">;
export type LogInDTO = Pick<User, "email" | "password">;
