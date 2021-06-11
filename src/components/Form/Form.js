import { useState } from 'react';
import { InputField } from '../InputField';
import { Link } from 'react-router-dom';

const signInFields = {
  email: {
    id: 1,
    placeholder: 'Email address',
    label: 'Email address',
    value: '',
    type: 'text',
  },
  password: {
    id: 2,
    placeholder: 'Password',
    label: 'Password',
    value: '',
    type: 'password',
  },
};
const signUpFields = {
  email: {
    name: 'email',
    id: 1,
    placeholder: 'Email address',
    label: 'Email address',
    value: '',
    type: 'text',
  },
  password: {
    name: 'password',
    id: 2,
    placeholder: 'Password',
    label: 'Password',
    value: '',
    type: 'password',
  },
  repeatPassword: {
    name: 'repeatPassword',
    id: 2,
    placeholder: 'Repeat password',
    label: 'Repeat password',
    value: '',
    type: 'password',
  },
};

export const Form = ({ type }) => {
  const fields = type === 'sign-in' ? signInFields : signUpFields;
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState();
  const [state, setState] = useState(fields);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'sign-up') {
      setError('');
      if (!/^.+@.+$/.test(state.email.value)) {
        setError('Please enter a valid Email address');
        setIsValid(false);
      } else if (
        state.password.value.length < 6 ||
        state.password.value.length > 40
      ) {
        setError('Password must be minimum 6 and maximum 40 characters long.');
        setIsValid(false);
      } else if (state.password.value !== state.repeatPassword.value) {
        setError("Passwords don't match");
        setIsValid(false);
      } else {
        setIsValid(false);
        setError('');
      }
    }
  };
  return (
    <section className="form">
      <h2 className="form__title">Sign In</h2>
      <form className="form__form" onSubmit={handleSubmit}>
        <div
          className={`form__warning ${
            isValid === false ? 'form__warning--open' : ''
          }`}>
          {error}
        </div>
        {Object.keys(fields).map((key) => (
          <>
            <InputField
              key={key}
              input={state[key].value}
              placeholder={state[key].placeholder}
              setInput={(value) => {
                setIsValid(true);
                setError('');
                setState((state) => ({
                  ...state,
                  [key]: { ...state[key], value },
                }));
              }}
              label={state[key].label}
              type={state[key].type}
              id={state[key].id}
              focus={() => {
                setState((state) => ({
                  ...state,
                  [key]: { ...state[key], placeholder: '' },
                }));
              }}
              blur={(placeholder) => {
                setState((state) => ({
                  ...state,
                  [key]: { ...state[key], placeholder },
                }));
              }}
            />
          </>
        ))}
        <button className="form__button button">
          {type === 'sign-in' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
      <p className="form__text">
        {type === 'sign-in' ? 'New to Netflix?' : 'Already a member?'}
        <Link
          className="form__link form__link--white"
          to={type === 'sign-in' ? '/sign-up' : '/sign-in'}>
          {type === 'sign-in' ? 'Sign Up' : 'Sign In'} now.
        </Link>{' '}
      </p>
      <p className="form__text form__text--small">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <span>
          <a className="form__link form__link--blue" href="#1">
            Learn more.
          </a>
        </span>
      </p>
    </section>
  );
};
