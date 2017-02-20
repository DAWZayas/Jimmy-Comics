import get from './get';
import create from './create';
import deleteComic from './delete';
import rating from './rating';

export default (app) => {
  get(app);
  create(app);
  deleteComic(app);
  rating(app);
};
