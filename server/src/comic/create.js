import passport from 'passport';
import fs from 'fs';
import moment from 'moment';

import {Comic} from '../db';
import {asyncRequest} from '../util';
import {server as serverConfig} from '../../config';

export default (app, direction) => {
  app.post('/api/comic', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {title, caption, image} = req.body;

    if (!title || !title.length) {
      res.status(400).send({error: 'Title should be present!'});
      return;
    }

    if (!caption || !caption.length) {
      res.status(400).send({error: 'Title should be present!'});
      return;
    }

    if(image){
      const base64Data = decodeURIComponent(image).replace(/^data:image\/jpeg;base64,/, '');
      fs.writeFileSync(__dirname + '/../../public/images/profiles/' + title + '.jpg', base64Data, 'base64');
      direction = `http://${serverConfig.host}:${serverConfig.port}/static/images/profiles/` + title + '.jpg';

    }

    const comic = new Comic({
      title,
      caption,
      url: direction,
      owner: req.user.id,
      likes: 0,
    });
    await comic.save();

    res.send(comic);
  }));
};
