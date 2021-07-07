import { SET_SIGN_UP_EMAIL } from '../TYPES';

export const signUpEmailReducer = (
  state = '',
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case SET_SIGN_UP_EMAIL:
      return action.payload;
    default:
      return state;
  }
};
