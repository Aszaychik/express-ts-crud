import { Router } from 'express';
import { helloWorld, helloWorld2 } from '../controllers';

// Create the router
const router: Router = Router();

// Routes
router.get('/', helloWorld);

router.get('/hello/world', helloWorld2);

// Export the router
export default router;
