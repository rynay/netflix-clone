import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setPath } from '../redux/AC';
import { useRouteMatch } from 'react-router-dom';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import * as ROUTES from '../constants/ROUTES';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

const footerSignInContent = {
  title: 'Questions? Call',
  phoneNumber: '8-800-100-9668',
  links: [
    ['FAQ', 'Cookie Preferences'],
    ['Help Center', 'Corporate Information'],
    ['Terms of Use'],
    ['Privacy'],
  ],
};

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
        }
        footer={<Footer content={footerSignInContent} />}>
        <Form type="sign-in" />
      </Header>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setPath: (path) => dispatch(setPath(path)),
});

export default connect(null, mapDispatchToProps)(SignIn);
