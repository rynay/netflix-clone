import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { init } from './redux/AC';
import { Switch } from 'react-router-dom';
import * as ROUTES from './constants/ROUTES';
import * as PAGES from './pages';
import { ProtectedRoute } from './components/ProtectedRoute';

const App = ({ user, init }) => {
  const history = useHistory();
  useEffect(() => {
    const cleanUp = init();
    return () => cleanUp();
  }, []);

  return (
    <Switch>
      <ProtectedRoute
        children={PAGES.SignIn}
        condition={!user}
        path={ROUTES.SIGNIN}
        redirect={ROUTES.MAIN}
      />
      <ProtectedRoute
        children={PAGES.SignUp}
        condition={!user}
        path={ROUTES.SIGNUP}
        redirect={ROUTES.MAIN}
      />
      <ProtectedRoute
        children={PAGES.Promo}
        condition={!user}
        path={ROUTES.PROMO}
        redirect={ROUTES.MAIN}
      />
      <ProtectedRoute
        children={PAGES.Main}
        condition={user}
        path={ROUTES.MAIN}
        redirect={ROUTES.PROMO}
      />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(init()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
