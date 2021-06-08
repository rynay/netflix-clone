import { firebase } from '../lib/firebase';
import * as TYPES from './TYPES';

export const init = () => (dispatch) => {
  const listener = firebase.auth().onAuthStateChanged((authUser) => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (authUser && !localUser) {
      dispatch(setUser(authUser));
      localStorage.setItem('user', JSON.stringify(authUser));
    } else if (!authUser && localUser) {
      dispatch(setUser(localUser));
    } else {
      dispatch(setUser(null));
      localStorage.removeItem('user');
    }
  });

  return () => listener();
};

export const logout = () => {
  localStorage.removeItem('user');
  firebase.auth().signOut();
};

export const signIn =
  ({ email, password }) =>
  (dispatch) => {
    dispatch(setError(null));
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      dispatch(setError(error));
    }
  };

export const signUp =
  ({ email, password, name }) =>
  (dispatch) => {
    dispatch(setError(null));
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        user
          .updateProfile({
            displayName: name,
            photoURL: `/images/users/${Math.floor(Math.random() * 5) + 1}.png`,
          })
          .catch((error) => {
            throw new Error(error);
          });
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };

const setUser = (payload) => ({ type: TYPES.SET_USER, payload });
const setError = (payload) => ({ type: TYPES.SET_ERROR, payload });
