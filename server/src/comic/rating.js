// npm packages
import passport from 'passport';

// our packages
import {Comic} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/comic/:id/rating', passport.authenticate('jwt', {session: false}),
  asyncRequest(async (req, res) => {
    const {id} = req.params;
    // get user input
    const {rating} = req.body;

    // make sure text is not empty
    if (rating !== undefined && !rating.length) {
      res.status(400).send({error: 'Rating should be not empty!'});
      return;
    }

    // get the comic
    const comic = await Comic.get(id);

    // double-check check if comic exists
    if (!comic) {
      res.status(400).send({error: 'Comic not found!'});
      return;
    }

    // append new rating
    comic.ratings.push({rating, user: req.user.id});

    // try saving
    await comic.save();

    // send created comic back
    res.send(comic);
  }));
};
