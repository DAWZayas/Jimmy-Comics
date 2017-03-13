import {Observable} from 'rxjs/Observable';

import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';
import {signRequest, ajaxErrorToMessage} from '../../util';
import {server as serverConfig} from '../../../config';

const host = serverConfig.host;
const port = serverConfig.port;

export const getAllComics = action$ => action$
  .ofType(ActionTypes.GET_ALL_COMICS)
  .switchMap(({}) => Observable
    .ajax.get(`http://${host}:${port}/api/comic`)
    .map(res => res.response)
    .map(comics => ({
      type: ActionTypes.GET_ALL_COMICS_SUCCESS,
      payload: {comics},
    }))
    .catch(error => Observable.of({
      type: ActionTypes.GET_ALL_COMICS_ERROR,
      payload: {error},
    },
    Actions.addNotificationAction(
      {text: `[get comics] Error: ${ajaxErrorToMessage(error)}`, alertType: 'danger'},
    ),
  )),
);

export const createComic = action$ => action$
  .ofType(ActionTypes.CREATE_COMIC)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://${host}:${port}/api/comic`, payload, headers)
    .map(res => res.response)
    .mergeMap(comic => Observable.of(
      {
        type: ActionTypes.CREATE_COMIC_SUCCESS,
        payload: comic,
      },
      Actions.addNotificationAction(
        {text: `Comic with title "${comic.title}" created`, alertType: 'info'},
      ),
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.CREATE_COMIC_ERROR,
        payload: {error},
      },
      Actions.addNotificationAction(
        {text: `[comic create] Error: ${ajaxErrorToMessage(error)}`, alertType: 'danger'},
      ),
    )),
  );

export const deleteComic = action$ => action$
  .ofType(ActionTypes.DELETE_COMIC)
  .map(signRequest)
  .switchMap(({headers, comicId}) => Observable
    .ajax.delete(`http://${host}:${port}/api/comic/${comicId}`, headers)
    .map(res => res.response)
    .mergeMap(comic => Observable.of ({
      type: ActionTypes.DELETE_COMIC_SUCCESS,
      comicId,
    },
    Actions.addNotificationAction({text: 'Delete Comic Success' , alertType: 'info'})
    ))
    .catch(error => Observable.of({
      type: ActionTypes.GET_ALL_COMICS_ERROR,
      payload: {error},
    },
    Actions.addNotificationAction(
      {text: `[delete comics] Error: ${ajaxErrorToMessage(error)}`, alertType: 'danger'},
    ),
  )),
  );

export const getMoreComics = action$ => action$
  .ofType(ActionTypes.GET_MORE_COMICS)
  .mergeMap(({headers, payload}) => Observable
    .ajax.get(`http://${host}:${port}/api/comic?skip=${payload.skip || 0}&limit=${payload.limit || 10}&match=${payload.match || ''}`, headers)
    .delayInDebug(2000)
    .map(res => res.response)
    .map(comics => ({
      type: ActionTypes.GET_MORE_COMICS_SUCCESS,
      payload: {comics, reset: payload.reset, filtered: payload.match},
    }))
    .catch(error => Observable.of(
      {
        type: ActionTypes.GET_MORE_COMICS_ERROR,
        payload: {error},
      },
      Actions.addNotificationAction(
        {text: `[get more comics] Error: ${ajaxErrorToMessage(error)}`, alertType: 'danger'},
      ),
    )),
);

export const removePendingComicNotifications = action$ => action$
  .ofType(ActionTypes.REMOVE_OBSERVABLE)
  .filter(action => action.payload && action.payload.comic)
  .map(action => action.payload.comic)
  .map(comic =>
    Actions.removeNotificationByRefAction(comic.id),
);

export const searchComics = action$ => action$
  .ofType(ActionTypes.DO_FILTER_COMICS)
  .debounceTime(500)
  .switchMap(({payload}) => Observable.of(
    {
      type: ActionTypes.RESET_COMICS,
      payload,
    },
    {
      type: ActionTypes.GET_MORE_COMICS,
      payload,
    },
  ),
);

export const likeComic = action$ => action$
  .ofType(ActionTypes.LIKE_COMIC)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://${host}:${port}/api/comic/like/${payload.id}`, payload, headers)
    .map(res => res.response)
    .mergeMap(comic => Observable.of(
      {
        type: ActionTypes.LIKE_COMIC_SUCCESS,
        payload: comic,
      },
      Actions.addNotificationAction(
        {text: `Comic with title "${comic.title}" liked`, alertType: 'info'},
      ),
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.LIKE_COMIC_ERROR,
        payload: {error},
      },
      Actions.addNotificationAction(
        {text: `[comic liked] Error: ${ajaxErrorToMessage(error)}`, alertType: 'danger'}
      )
    )));
