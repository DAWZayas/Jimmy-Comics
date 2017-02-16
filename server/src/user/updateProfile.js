import passport from 'passport';
import fs from 'fs';
import {User, r} from '../db';
import {hash, asyncRequest} from '../util';
import {server as serverConfig} from '../../config';

export default (app) => {
  app.post('/api/user/profile/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {

    const {name, surname, email, image} = req.body;
    const user = await User.get(req.params.id);

    if (req.user.id !== req.params.id) {
      res.status(403).send({error: 'Not enough rights to change other user profile!'});
      return;
    }

    // update profile data
    if(image){
      const base64Data = decodeURIComponent(image).replace(/^data:image\/jpeg;base64,/, '');
      fs.writeFileSync(__dirname + '/../../public/images/profiles/' + req.params.id + '.jpg', base64Data, 'base64');
      user.image = `http://${serverConfig.host}:${serverConfig.port}/static/images/profiles/` + req.params.id + '.jpg';

    }
    if (name) {
      user.name = name;
    }
    if (surname) {
      user.surname = surname;
    }
    if (email) {
      user.email = email;
    }


    // send succcess
    try {
      await user.save();
    } catch (e) {
      res.status(400).send({error: e.toString()});
      return;
    }
    res.send(user);
  }));
};
