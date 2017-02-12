import get from './get';
import create from './create';
import deleteCollection from './delete';

export default (app) => {
  get(app);
  create(app);
  deleteCollection(app);
};
