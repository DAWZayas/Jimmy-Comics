import passport from 'passport';

import {r, Collection} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/collection/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const collection = await Collection.get(req.params.id);
    res.send(collection);
  }));

  app.get('/api/collection', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
  const collections = await Collection.orderBy(r.asc('title'));
  res.send(collections);
}));
};
