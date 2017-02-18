import passport from 'passport';

import {r, Comic} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/comic/:id', asyncRequest(async (req, res) => {
    const comic = await Comic.get(req.params.id);
    res.send(comic);
  }));

  app.get('/api/comic', asyncRequest(async (req, res) => {
  const comics = await Comic.orderBy(r.asc('creationDate'));
  res.send(comics);
}));
};
