import get from './get';
import create from './create';
import deleteComic from './delete';
import like from './like';

export default (app) => {
  get(app);
  create(app);
  deleteComic(app);
  like(app);
};
