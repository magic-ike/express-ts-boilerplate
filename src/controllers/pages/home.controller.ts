import { RequestHandler } from 'express';

export const GREETING = 'Hello, World!';

export const index: RequestHandler = (_req, res) => {
  res.render('pages/home.hbs', {
    title: GREETING
  });
};
