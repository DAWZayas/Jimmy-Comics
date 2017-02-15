import {initAuth, login, providerLogin, register, logout, updateUser, updateProfile} from './auth';
import {addNotification} from './notifications';
import {addObservable, openConnection, closeConnection} from './realtime';
import {helloWorld} from './helloworld';
import {createCollection,getCollections,deleteCollection,getComics,createComic } from './collections';

export default [
  // auth
  initAuth,
  login,
  providerLogin,
  register,
  updateUser,
  updateProfile,
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
  getComics,
  createComic,
];
