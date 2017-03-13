import {initAuth, login, providerLogin, register, logout, updateUser, updateProfile} from './auth';
import {addNotification} from './notifications';
import {addObservable, openConnection, closeConnection} from './realtime';
import {helloWorld} from './helloworld';
import {createComic,deleteComic, getMoreComics, removePendingComicNotifications, getAllComics, searchComics, likeComic } from './comics';

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
  // comics
  createComic,
  deleteComic,
  getMoreComics,
  getAllComics,
  likeComic,
  searchComics,
  removePendingComicNotifications,
];
