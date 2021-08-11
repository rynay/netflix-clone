import { Header } from '../components/Header'
import { WatcherChoosing } from '../components/WatcherChoosing'
import { Browse } from '../components/Browse'
import { Spinner } from '../components/Spinner'
import { useSelector } from 'react-redux'
import { RootStore } from '../redux/store'

type Props = {
  openModal: () => void
  isModalOpen: boolean
}

const Main = ({ openModal, isModalOpen }: Props) => {
  const currentWatcher = useSelector(
    (store: RootStore) => store.currentWatcher.value
  )
  const data = useSelector((store: RootStore) => store.data.value)

  return (
    <>
      {currentWatcher && (!('films' in data) || !('series' in data)) && (
        <Spinner />
      )}
      {currentWatcher && 'films' in data && 'series' in data && (
        <Browse isModalOpen={isModalOpen} openModal={openModal} />
      )}
      {!currentWatcher && (
        <>
          <Header>
            <WatcherChoosing />
          </Header>
        </>
      )}
    </>
  )
}

export default Main
