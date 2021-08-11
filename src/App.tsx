import { useEffect, useState } from 'react'
import { init } from './redux/AC'
import * as ROUTES from './constants/ROUTES'
import { Switch } from 'react-router-dom'
import { SignIn, SignUp, Promo, Main } from './pages'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Modal } from './components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootStore } from './redux/store'

const App = () => {
  const dispatch: AppDispatch = useDispatch()
  const user = useSelector((store: RootStore) => store.user.value)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const cleanUp = dispatch(init())
    return () => cleanUp()
  }, [])

  return (
    <>
      <Switch>
        <ProtectedRoute
          path={ROUTES.SIGNIN}
          alternative={ROUTES.MAIN}
          condition={!user}>
          <SignIn />
        </ProtectedRoute>
        <ProtectedRoute
          path={ROUTES.SIGNUP}
          alternative={ROUTES.MAIN}
          condition={!user}>
          <SignUp />
        </ProtectedRoute>
        <ProtectedRoute
          path={ROUTES.MAIN}
          alternative={ROUTES.PROMO}
          condition={!!user}>
          <Main
            isModalOpen={isModalOpen}
            openModal={() => setIsModalOpen(true)}
          />
        </ProtectedRoute>
        <ProtectedRoute
          exact={true}
          path={ROUTES.PROMO}
          alternative={ROUTES.MAIN}
          condition={!user}>
          <Promo />
        </ProtectedRoute>
      </Switch>
      {isModalOpen && <Modal close={() => setIsModalOpen(false)} />}
    </>
  )
}

export default App
