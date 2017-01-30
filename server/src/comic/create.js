import passport from 'passport';


import {Comic} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/comic', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {name, price} = req.body;

    if (!name || !name.length) {
      res.status(400).send({error: 'Name should be present!'});
      return;
    }

    const comic = new Comic({
      name,
      price,
    });
    await comic.save();

    res.send(comic);
  }));
};
