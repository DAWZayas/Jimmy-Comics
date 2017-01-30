import get from './get';
import create from './create';
import deleteComic from './delete';

export default (app) => {
  get(app);
  create(app);
  deleteComic(app);
};
