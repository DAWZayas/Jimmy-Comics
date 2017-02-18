import {Observable} from 'rxjs/Observable';

import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';
import {signRequest, ajaxErrorToMessage} from '../../util';
import {server as serverConfig} from '../../../config';

const host = serverConfig.host;
const port = serverConfig.port;

export const getComics = action$ => action$
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
