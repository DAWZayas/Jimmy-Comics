import passport from 'passport';

import {Collection} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/collection', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {title} = req.body;

    if (!title || !title.length) {
      res.status(400).send({error: 'Title should be present!'});
      return;
    }

    const collection = new Collection({
      title
    });
    await collection.save();

    res.send(collection);
  }));
};
