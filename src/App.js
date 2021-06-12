import { useEffect } from 'react';
import { connect } from 'react-redux';
import { init } from './redux/AC';
import { useHistory, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/ROUTES';
import { SignIn, SignUp, Promo, Main } from './pages';
import { setSignUpEmail, setError } from './redux/AC';

const App = ({ user, init, path, setSignUpEmail, setAuthError }) => {
  const history = useHistory();

  useEffect(() => {
    const cleanUp = init();
    return () => cleanUp();
  }, []);

  useEffect(() => {
    if (path !== '/promo' || path !== '/sign-up') {
      setSignUpEmail('');
    }
    setAuthError('');
  }, [path]);

  useEffect(() => {
    if (!path) return;
    if (!user && path === ROUTES.MAIN) history.push(ROUTES.PROMO);
    if (
      user &&
      (path === ROUTES.SIGNIN ||
        path === ROUTES.SIGNUP ||
        path === ROUTES.PROMO)
    )
      history.push(ROUTES.MAIN);
  }, [path, user]);

  return (
    <>
      <Switch>
        <Route path={ROUTES.SIGNIN}>
          <SignIn />
        </Route>
        <Route path={ROUTES.SIGNUP}>
          <SignUp />
        </Route>
        <Route path={ROUTES.PROMO}>
          <Promo />
        </Route>
        <Route exact path={ROUTES.MAIN}>
          <Main />
        </Route>
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
