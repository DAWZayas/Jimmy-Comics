// npm packages
import passport from 'passport';

// our packages
import {r, Comic} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/comic/like/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    try {
      let exist = false;
      const comic = await Comic.get(req.params.id);

      for (let i = 0; i < comic.users.length; i++) {
        if (comic.users[i].id == req.user.id) {
          exist = true;
        }
      }

      if (exist) {
        res.status(400).send({error: 'Only can like one time this comic'});
        return;
      }

      comic.likes ++;
      comic.users.push({id: req.user.id});

      await comic.save();
      res.send(comic);

    } catch (e) {
      res.status(400).send({error: 'Cannot be liked'});
    }
  }));

  app.get('/api/comic/likes/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    try {
      const comics = await Comic;
      const comic = comics.filter(comic => comic.id == req.params.id);

      res.send(comic.likes);
    } catch (e) {
      res.status(400).send({error: 'User does not exist'});
    }
  }));

};
