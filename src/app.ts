import path from 'path';
import express from 'express';
import { engine } from 'express-handlebars';
import cors from 'cors';
import router from './routes/index.route';

// express app
const app = express();

// view engine: handlebars
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('views', path.join(__dirname, 'views'));

// json response formatting
app.set('json spaces', 2);

// cors
app.use(cors());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// custom middleware should go here

// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(router);

export default app;
