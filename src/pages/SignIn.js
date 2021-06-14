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

const SignIn = () => {
  return (
    <>
      <Header
        bg={
          <img
            aria-hidden
            src="/images/misc/home-bg-small.jpg"
            srcSet="/images/misc/home-bg-small.jpg 1000w, 
        /images/misc/home-bg-medium.jpg 1500w, 
        /images/misc/home-bg-large.jpg 1800w"
            alt=""
          />
        }
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

export default SignIn;
