import { Request, Response } from 'express';

// Controller

export const helloWorld = (req: Request, res: Response) => {
  return res.json({ message: 'Hello World' });
};

export const helloWorld2 = (req: Request, res: Response) => {
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
};
