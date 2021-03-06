import { Form } from '../components/Form'
import { Header } from '../components/Header'
import * as ROUTES from '../constants/ROUTES'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { useSelector } from 'react-redux'
import { RootStore } from '../redux/store'

const footerSignUpContent = {
  title: 'Questions? Call',
  phoneNumber: '8-800-100-9668',
  links: [
    ['FAQ', 'Cookie Preferences'],
    ['Help Center', 'Corporate Information'],
    ['Terms of Use'],
    ['Privacy'],
  ],
}

const SignUp = () => {
  const signUpEmail = useSelector((store: RootStore) => store.signUpEmail.value)

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
        footer={<Footer content={footerSignUpContent} />}
        navigation={
          <Link className="button" to={ROUTES.SIGNIN}>
            Sign In
          </Link>
        }>
        <Form type="sign-up" signUpEmail={signUpEmail} />
      </Header>
    </>
  )
}

export default SignUp
