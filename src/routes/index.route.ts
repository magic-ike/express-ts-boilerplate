import express from 'express';
import pageRouter from './pages/index.route';
import apiRouter from './api/index.route';

const router = express.Router();

router.use('/', pageRouter);
router.use('/api', apiRouter);
router.use((_req, res) => res.sendStatus(404));

export default router;
