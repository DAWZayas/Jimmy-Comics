import passport from 'passport';

import {Collection} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.delete('/api/collection/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {

    const collection = await Collection.get(req.params.id);

    await collection.delete();


    res.sendStatus(204);
  }));
};
