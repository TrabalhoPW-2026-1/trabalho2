import path from 'path';

import express from 'express';
// import morgan from 'morgan';
import { engine } from 'express-handlebars';

import validateEnv from './utils/validateEnv.ts';
import logger from './middlewares/logger.ts';
import router from './router/router.ts';
import { listProfessores, listTechnologies } from  './views/helpers/helper.ts';

const app = express();
const env = validateEnv();
const port = env.PORT;

app.engine('handlebars', engine({
    helpers: {
        listProfessores,
        listTechnologies,
    }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(process.cwd(), 'src', 'views'));

// app.use(morgan('combined'));
app.use(logger(env.LOGGER_TYPE, env.LOGGER_OUTPUT));

app.use(router);

app.listen(port, (): void => {
    console.log(`Example app listening at http://localhost:${port}`);
});
