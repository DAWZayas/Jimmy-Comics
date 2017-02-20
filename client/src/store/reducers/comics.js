import * as ActionTypes from '../actionTypes';

const initialState = {comics: [], status: 'inited', hasMore: true, answering: {}};

export const comics = (state = initialState, action) => {
  switch (action.type) {
    // all comics logic
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
    case ActionTypes.GET_MORE_COMICS:
      return {...state, status: 'loading', error: null};
    case ActionTypes.GET_MORE_COMICS_SUCCESS: {
      const hasMore = action.payload.comics.length === 6;
      return {...state, comics: state.comics.concat(action.payload.comics), status: 'done', hasMore};
    };
    case ActionTypes.GET_MORE_COMICS_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
    };
    case ActionTypes.CREATE_COMIC_SUCCESS: {
      const newComics = [...state.comics, action.payload];
       return {...state, comics: newComics, status: 'done', hasMore: state.hasMore};
    }
    case ActionTypes.DELETE_COMIC: {
      const newComics = state.comics.filter(comic => comic.id !== action.comicId);
      return {...state, comics: newComics};
    }
    case ActionTypes.SEARCH_COMIC: {
      const newComics = state.comics.filter(comic => comic.caption.toLowerCase().indexOf(action.text.toLowerCase()) !== -1);
      return {...state, comics: newComics, search: true};
    }
    case ActionTypes.GET_RATINGS_SUCCESS:
    case ActionTypes.RATING_COMIC_SUCCESS: {
      const newComics = state.comics.map(q => q.id === action.payload.id ? action.payload : q);
      return {
        ...state,
        comics: newComics,
        status: 'done',
        answering: action.type === ActionTypes.GET_RATINGS_SUCCESS ? state.answering : {
          ...state.answering,
          [action.payload.id]: false,
        },
        hasMore: state.hasMore,
      };
    }
    case ActionTypes.RATING_COMIC: {
      const answering = {...state.answering, [action.payload.comic.id]: true};
      return {...state, answering};
    }
    default:
      return state;
  }
};
