import {thinky} from './thinky';

export const Comic = thinky.createModel('Comic', {
  title: thinky.type.string().required(),
  url: thinky.type.string().required(),
  owner: thinky.type.string().required(),
  creationDate: thinky.type.date().default(thinky.r.now()),
  caption: thinky.type.string().required(),
  likes: thinky.type.number(),
  users: thinky.type.array().schema(
  thinky.type.object().schema({
    id: thinky.type.string().required(),
  })
  ).default([]),
});
