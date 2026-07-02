import { cleanEnv, str, port, num } from "envalid";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

export default function validateEnv() {
    return cleanEnv(process.env, {
        PORT: port({ default: 3000 }),
        NODE_ENV: str({ choices: ["development", "production", "test"], default: "development" }),
        LOGGER_TYPE: str({ choices: ["advanced", "simple"], default: "simple" }),
        LOGGER_OUTPUT: str({ default: "logs/app.log" }),
        DATABASE_URL: str({ default: "mysql://root:senhasegura@127.0.0.1:3307/game" }),
        SECRET: str({ default: "sjhvcjdbvefoidp2e1sqxayuigxjzvhdnfem3rkel2pw1sq098" }),
        BCRYPT_ROUNDS: num({ default: 10 }),
    });
}
