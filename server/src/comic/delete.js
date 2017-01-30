import passport from 'passport';

import {Comic} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.delete('/api/comic/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {

    const comic = await Comic.get(req.params.id);

    await comic.delete();


    res.sendStatus(204);
  }));
};
