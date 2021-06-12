import { getDefaultNormalizer } from '@testing-library/react';
import { firebase } from '../lib/firebase';
import * as TYPES from './TYPES';

export const init = () => (dispatch) => {
  const localUser = JSON.parse(localStorage.getItem('user'));
  dispatch(setUser(localUser));
  const listener1 = firebase.auth().onAuthStateChanged((authUser) => {
    if (authUser) {
      dispatch(setUser(authUser));
      localStorage.setItem('user', JSON.stringify(authUser));
    } else {
      dispatch(setUser(null));
      localStorage.removeItem('user');
    }
  });

  return () => {
    listener1();
  };
};

export const setCurrentWatcher = (user) => (dispatch, getState) => {
  dispatch({
    type: TYPES.SET_CURRENT_WATCHER,
    payload: user,
  });
  dispatch(getData());
};
const getData = () => (dispatch) => {
  const listener1 = firebase
    .firestore()
    .collection('films')
    .onSnapshot((snapshot) => {
      dispatch(
        setData({
          films: snapshot.docs.map((doc) => ({
            ...doc.data,
            docId: doc.id,
          })),
        })
      );
    });
  const listener2 = firebase
    .firestore()
    .collection('series')
    .onSnapshot((snapshot) => {
      dispatch(
        setData({
          series: snapshot.docs.map((doc) => ({
            ...doc.data,
            docId: doc.id,
          })),
        })
      );
    });
  return () => {
    listener1();
    listener2();
  };
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('user');
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(setCurrentWatcher(null));
    });
};

export const signIn =
  ({ email, password }) =>
  (dispatch) => {
    dispatch(setError(null));
    try {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      dispatch(setError(error));
    }
  };

export const signUp =
  ({ email, password, name }) =>
  (dispatch) => {
    dispatch(setError(null));
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
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
        dispatch(setError(error.message));
      });
  };

const setData = (payload) => ({ type: TYPES.SET_DATA, payload });
const setUser = (payload) => ({ type: TYPES.SET_USER, payload });
export const setError = (payload) => ({ type: TYPES.SET_ERROR, payload });
export const setPath = (payload) => ({ type: TYPES.SET_PATH, payload });
export const setSignUpEmail = (payload) => ({
  type: TYPES.SET_SIGN_UP_EMAIL,
  payload,
});
