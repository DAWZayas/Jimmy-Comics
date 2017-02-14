// npm packages
import passport from 'passport';

// our packages
import {Collection} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/collection/:id/comic', passport.authenticate('jwt', {session: false}),
  asyncRequest(async (req, res) => {
    const {id} = req.params;
    // get user input
    const {name, price} = req.body;

    // make sure name is not empty
    if (name !== undefined && !name.length) {
      res.status(400).send({error: 'Comic name should be not empty!'});
      return;
    }

    const collection = await Collection.get(id);

    collection.comics.push({name, price});

    // try saving
    await collection.save();

    res.send(collection);
  }));
};
