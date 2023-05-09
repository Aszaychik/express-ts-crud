import { Router, Request, Response } from 'express';

// Create the router
const router: Router = Router();

// Routes
router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

router.get('/hello/world', (req: Request, res: Response) => {
  res
    .status(200)
    .json({
      path: req.path,
      originalUrl: req.originalUrl,
      method: req.method,
      hostname: req.hostname,
      protocol: req.protocol,
      message: 'Hello World!',
      timestamp: new Date().toISOString(),
      success: true,
      status: res.statusCode,
      secure: req.secure,
    })
    .end();
});

// Export the router
export default router;
