import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path, { dirname } from 'path';
import YAML from 'yamljs';

import { fileURLToPath } from 'url';
import { router as userRouter } from './resources/users/user.router.js';
import { router as columnRouter } from './resources/columns/column.router.js';
import { router as boardRouter } from './resources/boards/board.router.js';
import { router as taskRouter } from './resources/tasks/task.router.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.use('/users', userRouter);
app.use('/columns', columnRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);

export { app };
