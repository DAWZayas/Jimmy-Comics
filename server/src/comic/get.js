import passport from 'passport';

import {r, Comic} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/comic/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const comic = await Comic.get(req.params.id);
    res.send(question);
  }));

  app.get('/api/comic', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
  // get 10 latest questions
  const comics = await Comic.orderBy(r.desc('name'));
  // send question back
  res.send(comics);
}));
};
