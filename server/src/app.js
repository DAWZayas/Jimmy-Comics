// npm packages
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import morgan from 'morgan';
import cors from 'cors';

// our packages
import {logger} from './util';
import {auth as authConfig} from '../config';
import setupAuthRoutes from './auth';
import setupUserRoutes from './user';
import setupComicRoutes from './comic';
import setupImages from './images';

// init app
const app = express();

// setup logging
app.use(morgan('combined', {stream: logger.stream}));

// setup CORS
app.use(cors());


// setup static files service
app.use('/static', express.static('public'));

// add body parsing
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true, limit: '2mb'})); // for parsing application/x-www-form-urlencoded

// add cookie parsing
app.use(cookieParser());

// add session support
app.use(session({
  secret: authConfig.sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true},
}));

// add passport.js
app.use(passport.initialize());
app.use(passport.session());

// test method
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// setup authentication routes
setupAuthRoutes(app);
// setup user routes
setupUserRoutes(app);
// setup comic routes
setupComicRoutes(app);
//setup images
setupImages(app);

// catch all unhandled errors
app.use((err, req, res, next) => {
  logger.error('unhandled application error: ', err);
  res.status(500).send(err);
});

// export app
export default app;
