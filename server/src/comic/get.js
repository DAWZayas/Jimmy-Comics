import passport from 'passport';

import {r, Comic} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/comic/:id', asyncRequest(async (req, res) => {
    const comic = await Comic.get(req.params.id);
    res.send(comic);
  }));

  app.get('/api/comic', asyncRequest(async (req, res) => {
    const skip = parseInt(req.query.skip, 10) || 0;
    const limit = parseInt(req.query.limit, 10) || 10;
    const match = req.query.match || '';
    const comics = await r.table('Comic')
                              .pluck('id', 'title', 'url', 'creationDate', 'caption', 'owner', 'likes')
                              .filter(doc => doc('caption').match(`(?i)${match}`))
                              .orderBy(r.asc('creationDate'))
                              .skip(skip)
                             .limit(limit);
   res.send(comics);
  }));
};
