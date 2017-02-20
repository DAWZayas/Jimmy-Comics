import React from 'react';
import {Observable} from 'rxjs/Observable';
import {rethinkdb} from 'rethinkdb-websocket-client';
import _ from 'lodash';

import * as Actions from '../actions';
import {UpdateComicNotification} from '../../components/comicList';

const r = rethinkdb;

export const registerComicObservable = comicId => (conn, getState) =>
  Observable.fromPromise(r.table('Comic').filter({id: comicId}).changes().run(conn))
  .switchMap(cursor => Observable.create((observer) => {
    cursor.each((err, row) => {
      if (err) throw err;
      observer.next(row);
    });
    return function() {
      cursor.close();
    };
  }).debounceTime(5000))
  .map(row => row.new_val)
  .filter((comic) => {
    if (!comic) {
      return false;
    }
    const storedComic = _.find(getState().comics.comics, {id: comic.id});
    return !storedComic || !_.isEqual(storedComic.ratings, comic.ratings);
  })
  .map((comic) => {
    const notificationId = Actions.getNextNotificationId();
    return Actions.addNotificationAction({
      text: <UpdateComicNotification notificationId={notificationId} comic={comic} />,
      alertType: 'warning',
      autoDisposable: false,
      refCode: `update-comic-${comic.id}`,
    });
  })
  .catch(error => Observable.of(
    Actions.addNotificationAction({text: error.toString(), alertType: 'danger'}),
  ));
