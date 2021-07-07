import * as TYPES from '../TYPES';

export const formattedDataReducer = (
  state = {},
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case TYPES.SET_FORMATTED_DATA:
      return action.payload;
    case TYPES.UPDATE_FORMATTED_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
