import { SET_DATA } from '../TYPES';

export const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
