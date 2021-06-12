import { SET_SIGN_UP_EMAIL } from '../TYPES';

export const signUpEmailReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SIGN_UP_EMAIL:
      return action.payload;
    default:
      return state;
  }
};
