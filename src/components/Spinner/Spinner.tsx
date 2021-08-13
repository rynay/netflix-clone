import { useSelector } from 'react-redux'
import { RootStore } from '../../redux/store'
import { Header } from '../Header'

const Spinner = () => {
  const currentWatcher = useSelector(
    (store: RootStore) => store.currentWatcher.value
  )
  return (
    <Header>
      <div className="spinner">
        <img
          className="spinner__loading"
          src="/images/misc/spinner.png"
          alt="Loading"
        />
        <img
          className="spinner__image"
          src={currentWatcher?.photoURL || currentWatcher?.photo || ''}
          alt={currentWatcher?.displayName || ''}
        />
      </div>
    </Header>
  )
}

export default Spinner
