import * as ActionTypes from '../actionTypes';

const initialState = {comics: [], status: 'inited'};

export const comics = (state = initialState, action) => {
  switch (action.type) {
    // all questions logic
    case ActionTypes.GET_ALL_COMICS:
      return {
        ...state,
        status: 'loading...',
      };
    case ActionTypes.GET_ALL_COMICS_SUCCESS:
      return {
        comics: action.payload.comics,
        status: 'done',
      };
    case ActionTypes.GET_ALL_COMICS_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };
    case ActionTypes.CREATE_COMIC_SUCCESS: {
      const newComics = [...state.comics, action.payload];
      return {...state, comics: newComics};
    }
    case ActionTypes.DELETE_COMIC: {
      const newComics = state.comics.filter(comic => comic.id !== action.comicId);
      return {...state, comics: newComics};
    }
    default:
      return state;
  }
};
