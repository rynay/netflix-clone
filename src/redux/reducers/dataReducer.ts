import { SET_DATA, UPDATE_DATA } from '../TYPES';

export const dataReducer = (
  state = {},
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case SET_DATA:
      return action.payload;
    case UPDATE_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
