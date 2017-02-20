import {thinky} from './thinky';

export const Comic = thinky.createModel('Comic', {
  title: thinky.type.string().required(),
  likes: thinky.type.number().min(0),
  url: thinky.type.string().required(),
  owner: thinky.type.string().required(),
  creationDate: thinky.type.date().default(thinky.r.now()),
  caption: thinky.type.string().required(),
  ratings: thinky.type.array().schema(
    thinky.type.object().schema({
      user: thinky.type.string().required(),
      rating: thinky.type.number().required(),
    })
  ).default([]),
});
