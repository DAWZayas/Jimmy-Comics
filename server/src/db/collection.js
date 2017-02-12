import {thinky} from './thinky';

export const Collection = thinky.createModel('Collection', {
  title: thinky.type.string().required(),
  comics: thinky.type.array().schema(
    thinky.type.object().schema({
      name: thinky.type.string().required(),
      price: thinky.type.number().required(),
      creationDate: thinky.type.date().default(thinky.r.now()),
      description: thinky.type.string(),
    })
  ).default([]),
});
