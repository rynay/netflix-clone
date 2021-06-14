import * as TYPES from '../TYPES';

export const filteredDataReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.SET_FILTERED_DATA:
      return action.payload;
    case TYPES.UPDATE_FILTERED_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};