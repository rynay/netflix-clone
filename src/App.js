import { useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { init } from './redux/AC';
import { useHistory, Switch } from 'react-router-dom';
import * as ROUTES from './constants/ROUTES';
import { SignIn, SignUp, Promo, Main } from './pages';
import { setSignUpEmail, setError } from './redux/AC';
import { ProtectedRoute } from './components/ProtectedRoute';

const App = ({ user, init, path, setSignUpEmail, setAuthError }) => {
  const history = useHistory();

  useEffect(() => {
    const cleanUp = init();
    return () => cleanUp();
  }, []);

  // useEffect(() => {
  //   if (path !== '/promo' || path !== '/sign-up') {
  //     setSignUpEmail('');
  //   }
  //   setAuthError('');
  // }, [path]);

  // useLayoutEffect(() => {
  //   if (!path) return;
  //   if (!user && path === ROUTES.MAIN) history.push(ROUTES.PROMO);
  //   if (
  //     user &&
  //     (path === ROUTES.SIGNIN ||
  //       path === ROUTES.SIGNUP ||
  //       path === ROUTES.PROMO)
  //   )
  //     history.push(ROUTES.MAIN);
  // }, [path, user]);

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
          path={ROUTES.PROMO}
          alternative={ROUTES.MAIN}
          condition={!user}>
          <Promo />
        </ProtectedRoute>
        <ProtectedRoute
          exact
          path={ROUTES.MAIN}
          alternative={ROUTES.PROMO}
          condition={user}>
          <Main />
        </ProtectedRoute>
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  path: state.path,
});

const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(init()),
  setSignUpEmail: (email) => dispatch(setSignUpEmail(email)),
  setAuthError: () => dispatch(setError(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
