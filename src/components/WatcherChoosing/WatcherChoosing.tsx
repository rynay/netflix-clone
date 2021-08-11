import { useDispatch, useSelector } from 'react-redux'
import { setCurrentWatcher } from '../../redux/reducers/currentWatcherSlice'
import { AppDispatch, RootStore } from '../../redux/store'

const WatcherChoosing = () => {
  const dispatch: AppDispatch = useDispatch()
  const user = useSelector((store: RootStore) => store.user.value)

  return (
    <section className="watcherChoosing">
      <h1 className="watcherChoosing__title">Who's watching?</h1>
      <div className="watcherChoosing__usersContainer">
        <button
          className="watcherChoosing__user"
          onClick={() => dispatch(setCurrentWatcher(user))}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              return dispatch(setCurrentWatcher(user))
            }
          }}>
          <img src={user?.photoURL || user?.photo} alt="" />
          <div>{user?.displayName || user?.name}</div>
        </button>
      </div>
    </section>
  )
}

export default WatcherChoosing
