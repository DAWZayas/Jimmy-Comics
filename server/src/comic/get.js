import passport from 'passport';

import {r, Comic} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/comic/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const comic = await Comic.get(req.params.id);
    res.send(comic);
  }));

  app.get('/api/comic', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
  const comics = await Comic.orderBy(r.asc('name'));
  res.send(comics);
}));
};
