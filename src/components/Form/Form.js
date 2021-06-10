import { useState } from 'react';
import { InputField } from '../InputField';
import { Link } from 'react-router-dom';

const signInFields = {
  email: {
    id: 1,
    placeholder: 'Email or phone number',
    label: 'Email or phone number',
    value: '',
    type: 'text',
    warning: 'Please enter a valid email or phone number.',
    isWarningShown: false,
  },
  password: {
    id: 2,
    placeholder: 'Password',
    label: 'Password',
    value: '',
    type: 'text',
    warning: 'Your password must contain between 4 and 60 characters.',
    isWarningShown: false,
  },
};
const signUpFields = {
  email: {
    id: 1,
    placeholder: 'Email or phone number',
    label: 'Email or phone number',
    value: '',
    type: 'text',
  },
  password: {
    id: 2,
    placeholder: 'Password',
    label: 'Password',
    value: '',
    type: 'text',
  },
  repeatPassword: {
    id: 2,
    placeholder: 'Repeat password',
    label: 'Repeat password',
    value: '',
    type: 'text',
  },
};

export const Form = ({ type }) => {
  const fields = type === 'sign-in' ? signInFields : signUpFields;
  const [state, setState] = useState(fields);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="form">
      <h2 className="form__title">Sign In</h2>
      <form className="form__form" onSubmit={handleSubmit}>
        {Object.keys(fields).map((key) => (
          <InputField
            key={key}
            input={state[key].value}
            placeholder={state[key].placeholder}
            setInput={(value) =>
              setState((state) => ({
                ...state,
                [key]: { ...state[key], value },
              }))
            }
            setPlaceholder={(placeholder) =>
              setState((state) => ({
                ...state,
                [key]: { ...state[key], placeholder },
              }))
            }
            label={state[key].label}
            type={state[key].type}
            id={state[key].id}
          />
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
        <div>
          <a className="form__link form__link--blue" href="#1">
            Learn more.
          </a>
        </div>
      </p>
    </section>
  );
};
