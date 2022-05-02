import express from 'express';

export const API_ROUTER_CONFIRMATION = '/api router works';

const apiRouter = express.Router();

apiRouter.use('/', (_req, res) =>
  res.json({ message: API_ROUTER_CONFIRMATION })
);
// new api routes should go here
// every route should have its own router and controller

export default apiRouter;
