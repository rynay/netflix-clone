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

export const setCurrentWatcher = (user) => (dispatch) => {
  dispatch({
    type: TYPES.SET_CURRENT_WATCHER,
    payload: user,
  });
  const listener = dispatch(getData());
  return () => {
    listener();
  };
};
const getData = () => (dispatch) => {
  const listener1 = firebase
    .firestore()
    .collection('films')
    .get()
    .then((snapshot) => {
      const films = snapshot.docs.map((doc) => ({
        ...doc.data(),
        docId: doc.id,
      }));
      dispatch(
        setData({
          films: {
            Children: films.filter((item) => item.genre === 'children'),
            Romance: films.filter((item) => item.genre === 'romance'),
            Drama: films.filter((item) => item.genre === 'drama'),
            Suspense: films.filter((item) => item.genre === 'suspense'),
            Thriller: films.filter((item) => item.genre === 'thriller'),
          },
        })
      );
    });
  const listener2 = firebase
    .firestore()
    .collection('series')
    .get()
    .then((snapshot) => {
      const series = snapshot.docs.map((doc) => ({
        ...doc.data(),
        docId: doc.id,
      }));
      dispatch(
        setData({
          series: {
            Documentaries: series.filter(
              (item) => item.genre === 'documentaries'
            ),
            Comedies: series.filter((item) => item.genre === 'comedies'),
            Crime: series.filter((item) => item.genre === 'crime'),
            Children: series.filter((item) => item.genre === 'children'),
            'Feel Good': series.filter((item) => item.genre === 'feel-good'),
          },
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
  return firebase
    .auth()
    .signOut()
    .then(() => {
      return dispatch(setCurrentWatcher(null));
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
