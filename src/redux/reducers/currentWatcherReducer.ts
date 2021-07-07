import { SET_CURRENT_WATCHER } from '../TYPES';

export const currentWatcherReducer = (
  state = null,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case SET_CURRENT_WATCHER:
      return action.payload;
    default:
      return state;
  }
};
