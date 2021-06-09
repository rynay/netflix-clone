import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setPath } from '../redux/AC';
import { useRouteMatch } from 'react-router-dom';
import { SignUpForm } from '../components/SignUpForm';
import { Header } from '../components/Header';
import * as ROUTES from '../constants/ROUTES';
import { Link } from 'react-router-dom';

const SignUp = ({ setPath }) => {
  const { path } = useRouteMatch();
  useEffect(() => {
    setPath(path);
  }, [path]);
  return (
    <>
      <Header
        navigation={
          <Link className="button" to={ROUTES.SIGNIN}>
            Sign In
          </Link>
        }>
        <SignUpForm />
      </Header>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setPath: (path) => dispatch(setPath(path)),
});

export default connect(null, mapDispatchToProps)(SignUp);
