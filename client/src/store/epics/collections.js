import {Observable} from 'rxjs/Observable';

import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';
import {signRequest, ajaxErrorToMessage} from '../../util';
import {server as serverConfig} from '../../../config';

const host = serverConfig.host;
const port = serverConfig.port;

export const getCollections = action$ => action$
  .ofType(ActionTypes.GET_ALL_COLLECTIONS)
  .map(signRequest)
  .switchMap(({headers}) => Observable
    .ajax.get(`http://${host}:${port}/api/collection`, headers)
    .map(res => res.response)
    .map(collections => ({
      type: ActionTypes.GET_ALL_COLLECTIONS_SUCCESS,
      payload: {collections},
    }))
    .catch(error => Observable.of({
      type: ActionTypes.GET_ALL_COLLECTIONS_ERROR,
      payload: {error},
    })),
  );

export const createCollection = action$ => action$
  .ofType(ActionTypes.CREATE_COLLECTION)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://${host}:${port}/api/collection`, payload, headers)
    .map(res => res.response)
    .mergeMap(collection => Observable.of(
      {
        type: ActionTypes.CREATE_COLLECTION_SUCCESS,
        payload: collection,
      },
      Actions.addNotificationAction(
        {text: `Collection with title "${collection.title}" created`, alertType: 'info'},
      ),
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.CREATE_COLLECTION_ERROR,
        payload: {error},
      },
      Actions.addNotificationAction(
        {text: `[collection create] Error: ${ajaxErrorToMessage(error)}`, alertType: 'danger'},
      ),
    )),
  );

export const deleteCollection = action$ => action$
  .ofType(ActionTypes.DELETE_COLLECTION)
  .map(signRequest)
  .switchMap(({headers, collectionId}) => Observable
    .ajax.delete(`http://${host}:${port}/api/collection/${collectionId}`, headers)
    .map(res => res.response)
    .mergeMap(collection => Observable.of ({
      type: ActionTypes.DELETE_COLLECTION_SUCCESS,
      collectionId,
    },
    Actions.addNotificationAction({text: 'Delete Collection Success' , alertType: 'info'})
    ))
    .catch(error => Observable.of({
      type: ActionTypes.DELETE_COLLECTION_ERROR,
      payload: {error},
    })),
  );
