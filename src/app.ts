import express, { Application } from 'express';
import routes from './routes/index.js';

// create an express app
const app: Application = express();

// initialize port
const port: number = 3000;

// use routes
app.use('/', routes);

// start the express server
app.listen(port, () => {
  console.log(`⚡：[server]: Server is running at https://localhost:${port}`);
});
