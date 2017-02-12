import {initAuth, login, providerLogin, register, logout} from './auth';
import {addNotification} from './notifications';
import {addObservable, openConnection, closeConnection} from './realtime';
import {helloWorld} from './helloworld';
import {createCollection,getCollections,deleteCollection } from './collections';

export default [
  // auth
  initAuth,
  login,
  providerLogin,
  register,
  logout,
  addNotification,
  addObservable,
  openConnection,
  closeConnection,
  // hello world
  helloWorld,
  // collections
  createCollection,
  getCollections,
  deleteCollection,
];
