import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setPath } from '../redux/AC';
import { useRouteMatch } from 'react-router-dom';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import * as ROUTES from '../constants/ROUTES';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

const footerSignUpContent = {
  title: 'Questions? Call',
  phoneNumber: '8-800-100-9668',
  links: [
    ['FAQ', 'Cookie Preferences'],
    ['Help Center', 'Corporate Information'],
    ['Terms of Use'],
    ['Privacy'],
  ],
};

const SignUp = ({ setPath, signUpEmail }) => {
  const { path } = useRouteMatch();
  useEffect(() => {
    setPath(path);
  }, [path]);
  return (
    <>
      <Header
        footer={<Footer content={footerSignUpContent} />}
        navigation={
          <Link className="button" to={ROUTES.SIGNIN}>
            Sign In
          </Link>
        }>
        <Form type="sign-up" signUpEmail={signUpEmail} />
      </Header>
    </>
  );
};

const mapStateToProps = (state) => ({
  signUpEmail: state.signUpEmail,
});

const mapDispatchToProps = (dispatch) => ({
  setPath: (path) => dispatch(setPath(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
