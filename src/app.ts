import express, { Express } from 'express';
import routes from './routes/index.js';

const app: Express = express();
const port: number = 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`⚡：[server]: Server is running at https://localhost:${port}`);
});
