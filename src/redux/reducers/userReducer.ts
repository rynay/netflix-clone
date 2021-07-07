import * as TYPES from '../TYPES';

export const userReducer = (
  state = null,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case TYPES.SET_USER:
      return action.payload;
    case TYPES.UPDATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
