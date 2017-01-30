import {initAuth, login, providerLogin, register, logout} from './auth';
import {addNotification} from './notifications';
import {addObservable, openConnection, closeConnection} from './realtime';
import {helloWorld} from './helloworld';
import {createComic,getComics,deleteComic } from './comics';

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
  // comics
  createComic,
  getComics,
  deleteComic,
];
