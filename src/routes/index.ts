import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

router.get('/hello/world', (req: Request, res: Response) => {
  res.json({
    path: req.path,
    originalUrl: req.originalUrl,
    method: req.method,
    hostname: req.hostname,
    protocol: req.protocol,
    message: 'Hello World!',
    timestamp: new Date().toISOString(),
    success: true,
  });
});

export default router;
