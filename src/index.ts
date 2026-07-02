import path from "path";

import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import cookieParser from "cookie-parser";
import session from "express-session";
import { v4 as uuidv4 } from "uuid";

import validateEnv from "./utils/validateEnv.ts";
import logger from "./middlewares/logger.ts";
import router from "./router/router.ts";
import { listProfessores, listTechnologies } from  "./views/helpers/helper.ts";

const app = express();
const env = validateEnv();
const port = env.PORT;
const pubDirPath = path.join(process.cwd(), "public");

app.engine("handlebars", engine({
    helpers: {
        listProfessores,
        listTechnologies,
    }
}));

app.set("view engine", "handlebars");
app.set("views", path.join(process.cwd(), "src", "views"));

// app.use(morgan("combined"));
app.use(logger(env.LOGGER_TYPE, env.LOGGER_OUTPUT));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
    session({
        name: "sid",
        genid: () => uuidv4(),
        secret: env.SECRET,
        resave: false,
        saveUninitialized: false,
        rolling: true,
        cookie: {
            httpOnly: true,
            maxAge: 7_200_000  // 2h
        },
    }),
);

app.use((req, res, next) => {
    res.locals.isLogged = !!req.session.userId
    res.locals.userName = req.session.userName
    next()
})

app.use(router);

app.use(express.static(pubDirPath));

app.use((req, res) => {
    res.sendStatus(404);
});

app.listen(port, (): void => {
    console.log(`Example app listening at http://localhost:${port}`);
});
