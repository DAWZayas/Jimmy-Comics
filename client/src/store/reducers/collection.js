import * as ActionTypes from '../actionTypes';

const initialState = {collections: [], status: 'inited'};

export const collections = (state = initialState, action) => {
  switch (action.type) {
    // all questions logic
    case ActionTypes.GET_ALL_COLLECTIONS:
      return {
        ...state,
        status: 'loading...',
      };
    case ActionTypes.GET_ALL_COLLECTIONS_SUCCESS:
      return {
        collections: action.payload.collections,
        status: 'done',
      };
    case ActionTypes.GET_ALL_COLLECTIONS_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };
    case ActionTypes.CREATE_COLLECTION_SUCCESS: {
      const newCollections = [...state.collections, action.payload];
      return {...state, collections: newCollections};
    }
    case ActionTypes.DELETE_COLLECTION: {
      const newCollections = state.collections.filter(collection => collection.id !== action.collectionId);
      return {...state, collection: newCollections};
    }
    default:
      return state;
  }
};
