import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { init } from './redux/AC';
import * as ROUTES from './constants/ROUTES';
import { Switch } from 'react-router-dom';
import { SignIn, SignUp, Promo, Main } from './pages';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Modal } from './components/Modal';

const App = ({ user, init }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const cleanUp = init();
    return () => cleanUp();
  }, []);

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
          condition={user}>
          <Main
            isModalOpen={isModalOpen}
            openModal={() => setIsModalOpen(true)}
          />
        </ProtectedRoute>
        <ProtectedRoute
          exact
          path={ROUTES.PROMO}
          alternative={ROUTES.MAIN}
          condition={!user}>
          <Promo />
        </ProtectedRoute>
      </Switch>
      {isModalOpen && <Modal close={() => setIsModalOpen(false)} />}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(init()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
