import get from './get';
import create from './create';
import deleteCollection from './delete';
import comic from './comic';

export default (app) => {
  get(app);
  create(app);
  deleteCollection(app);
  comic(app);
};
