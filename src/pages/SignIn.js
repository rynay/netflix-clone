import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setPath } from '../redux/AC';
import { useRouteMatch } from 'react-router-dom';
import { SignInForm } from '../components/SignInForm';
import { Header } from '../components/Header';
import * as ROUTES from '../constants/ROUTES';
import { Link } from 'react-router-dom';

const SignIn = ({ setPath }) => {
  const { path } = useRouteMatch();
  useEffect(() => {
    setPath(path);
  }, [path]);
  return (
    <>
      <Header
        navigation={
          <Link className="button" to={ROUTES.SIGNUP}>
            Sign Up
          </Link>
        }>
        <SignInForm />
      </Header>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setPath: (path) => dispatch(setPath(path)),
});

export default connect(null, mapDispatchToProps)(SignIn);
