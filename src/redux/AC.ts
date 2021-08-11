import { AppDispatch, RootStore } from './store'
import { firebase } from '../lib/firebase'
import { setData, updateData } from './reducers/dataSlice'
import {
  setFormattedData,
  updateFormattedData,
} from './reducers/formattedDataSlice'
import { setFilteredData } from './reducers/filteredDataSlice'
import { setUser, updateUser } from './reducers/userSlice'
import { setCurrentWatcher } from './reducers/currentWatcherSlice'
import { setError } from './reducers/errorSlice'

export const init = () => (dispatch: AppDispatch) => {
  const localUser = JSON.parse(localStorage.getItem('user') || '')
  dispatch(setUser(localUser))
  const listener1 = firebase.auth().onAuthStateChanged((authUser) => {
    if (authUser) {
      dispatch(setUser(authUser as unknown as TUser))
      localStorage.setItem('user', JSON.stringify(authUser))
    } else {
      dispatch(setData({}))
      dispatch(setFormattedData({}))
      dispatch(setFilteredData({}))
      dispatch(setUser(null))
      localStorage.removeItem('user')
    }
  })

  return () => {
    listener1()
  }
}

export const handleCurrentWatcher =
  (user: RootStore['user']['value']) => (dispatch: AppDispatch) => {
    dispatch(setCurrentWatcher(user))
    if (!user) {
      dispatch(setData({}))
      dispatch(setFormattedData({}))
      dispatch(setFilteredData(null))
      return
    }
    dispatch(getData())
  }

export const getData = () => (dispatch: AppDispatch) => {
  const listener1 = firebase
    .firestore()
    .collection('films')
    .get()
    .then((snapshot) => {
      const films = snapshot.docs.map((doc) => ({
        ...(doc.data() as TFilm),
        docId: doc.id,
      }))
      dispatch(updateData({ films }))
      dispatch(
        updateFormattedData({
          films: {
            Children: films.filter((item) => item!.genre === 'children'),
            Romance: films.filter((item) => item!.genre === 'romance'),
            Drama: films.filter((item) => item!.genre === 'drama'),
            Suspense: films.filter((item) => item!.genre === 'suspense'),
            Thriller: films.filter((item) => item!.genre === 'thriller'),
          },
        })
      )
    })
  const listener2 = firebase
    .firestore()
    .collection('series')
    .get()
    .then((snapshot) => {
      const series = snapshot.docs.map((doc) => ({
        ...(doc.data() as TSerial),
        docId: doc.id,
      }))
      dispatch(updateData({ series }))
      dispatch(
        updateFormattedData({
          series: {
            Documentaries: series.filter(
              (item) => item!.genre === 'documentaries'
            ),
            Comedies: series.filter((item) => item!.genre === 'comedies'),
            Crime: series.filter((item) => item!.genre === 'crime'),
            Children: series.filter((item) => item!.genre === 'children'),
            'Feel Good': series.filter((item) => item!.genre === 'feel-good'),
          },
        })
      )
    })
  return [listener1, listener2]
}

export const logout = () => (dispatch: AppDispatch) => {
  localStorage.removeItem('user')
  dispatch(setData({}))
  dispatch(setFormattedData({}))
  dispatch(setFilteredData({}))
  return firebase
    .auth()
    .signOut()
    .then(() => {
      return dispatch(handleCurrentWatcher(null))
    })
}

type Auth = { email: string; password: string; name?: string }

export const signIn =
  ({ email, password }: Auth) =>
  (dispatch: AppDispatch) => {
    dispatch(setError(null))
    try {
      return firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      dispatch(setError(error))
    }
    return (async () => {})()
  }

export const signUp =
  ({ email, password, name }: Required<Auth>) =>
  (dispatch: AppDispatch) => {
    dispatch(setError(null))
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser
        if (user) {
          user
            .updateProfile({
              displayName: name,
              photoURL: `/images/users/${
                Math.floor(Math.random() * 5) + 1
              }.png`,
            })
            .then(() => {
              dispatch(
                updateUser({
                  name: name,
                  photo: `/images/users/${
                    Math.floor(Math.random() * 5) + 1
                  }.png`,
                })
              )
            })
            .catch((error) => {
              throw new Error(error)
            })
        }
      })
      .catch((error) => {
        dispatch(setError(error.message))
      })
  }

export const filterData =
  (query?: string) => (dispatch: AppDispatch, getState: () => RootStore) => {
    const {
      data: { value: data },
    } = getState()
    if (query && 'films' in data && 'series' in data) {
      dispatch(
        setFilteredData({
          films: {
            Children: data.films.filter(
              (item) =>
                item.genre === 'children' &&
                (item.title.toLowerCase().includes(query.toLowerCase()) ||
                  item.description.toLowerCase().includes(query.toLowerCase()))
            ),
            Romance: data.films.filter(
              (item) =>
                item.genre === 'romance' &&
                (item.title.toLowerCase().includes(query.toLowerCase()) ||
                  item.description.toLowerCase().includes(query.toLowerCase()))
            ),
            Drama: data.films.filter(
              (item) =>
                item.genre === 'drama' &&
                (item.title.toLowerCase().includes(query.toLowerCase()) ||
                  item.description.toLowerCase().includes(query.toLowerCase()))
            ),
            Suspense: data.films.filter(
              (item) =>
                item.genre === 'suspense' &&
                (item.title.toLowerCase().includes(query.toLowerCase()) ||
                  item.description.toLowerCase().includes(query.toLowerCase()))
            ),
            Thriller: data.films.filter(
              (item) =>
                item.genre === 'thriller' &&
                (item.title.toLowerCase().includes(query.toLowerCase()) ||
                  item.description.toLowerCase().includes(query.toLowerCase()))
            ),
          },
          series: {
            Documentaries: data.series.filter(
              (item) =>
                item.genre === 'documentaries' &&
                (item.title.toLowerCase().includes(query.toLowerCase()) ||
                  item.description.toLowerCase().includes(query.toLowerCase()))
            ),
            Comedies: data.series.filter(
              (item) =>
                item.genre === 'comedies' &&
                (item.title.toLowerCase().includes(query.toLowerCase()) ||
                  item.description.toLowerCase().includes(query.toLowerCase()))
            ),
            Crime: data.series.filter(
              (item) =>
                item.genre === 'crime' &&
                (item.title.toLowerCase().includes(query.toLowerCase()) ||
                  item.description.toLowerCase().includes(query.toLowerCase()))
            ),
            Children: data.series.filter(
              (item) =>
                item.genre === 'children' &&
                (item.title.toLowerCase().includes(query.toLowerCase()) ||
                  item.description.toLowerCase().includes(query.toLowerCase()))
            ),
            'Feel Good': data.series.filter(
              (item) =>
                item.genre === 'feel-good' &&
                (item.title.toLowerCase().includes(query.toLowerCase()) ||
                  item.description.toLowerCase().includes(query.toLowerCase()))
            ),
          },
        })
      )
    } else {
      dispatch(setFilteredData({}))
    }
  }
