import {thinky} from './thinky';

export const Comic = thinky.createModel('Comic', {
  name: thinky.type.string().required(),
  price: thinky.type.number().required(),
  creationDate: thinky.type.date().default(thinky.r.now()),
  description: thinky.type.string(),
  comments: thinky.type.array().schema(
    thinky.type.object().schema({
      user: thinky.type.string().required(),
      comment: thinky.type.string().required(),
    })
  ).default([]),
});
