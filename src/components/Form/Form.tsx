import { useState, Fragment, FormEvent } from 'react'
import { InputField } from '../InputField'
import { Link } from 'react-router-dom'
import { useMemo, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { signIn, signUp } from '../../redux/AC'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootStore } from '../../redux/store'

type Props = {
  type: 'sign-in' | 'sign-up'
  signUpEmail?: RootStore['signUpEmail']['value']
}

type TField = {
  id: number
  placeholder: string
  label: string
  value?: string
  type: string
}

const Form = ({ type, signUpEmail }: Props) => {
  const dispatch: AppDispatch = useDispatch()
  const authError = useSelector((store: RootStore) => store.error.value)
  const history = useHistory()
  const signInFields: { [key in string]: TField } = useMemo(
    () => ({
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
    }),
    []
  )
  const signUpFields: { [key in string]: TField } = useMemo(
    () => ({
      email: {
        name: 'email',
        id: 1,
        placeholder: 'Email address',
        label: 'Email address',
        value: signUpEmail,
        type: 'text',
      },
      name: {
        name: 'name',
        id: 1,
        placeholder: 'Your name',
        label: 'Your name',
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
    }),
    []
  )
  const fields = type === 'sign-in' ? signInFields : signUpFields
  const [error, setError] = useState('')
  const [isValid, setIsValid] = useState<boolean>()
  const [state, setState] = useState<typeof signUpFields | typeof signInFields>(
    fields
  )

  useEffect(() => {
    setError(authError || '')
  }, [authError])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      Object.keys(state)
        .map((key) => state[key].value)
        .some((field) => !field?.trim())
    ) {
      setError('Please fill all the fields')
      setIsValid(false)
      return
    }

    if (type === 'sign-up') {
      setError('')
      if (!/^.+@.+$/.test(state.email.value || '')) {
        setError('Please enter a valid Email address')
        setIsValid(false)
      } else if (
        state.password.value &&
        (state.password.value.length < 6 || state.password.value.length > 40)
      ) {
        setError('Password must be minimum 6 and maximum 40 characters long.')
        setIsValid(false)
      } else if (state.password.value !== state.repeatPassword.value) {
        setError("Passwords don't match")
        setIsValid(false)
      } else {
        setIsValid(true)
        setError('')
        dispatch(
          signUp({
            email: state.email.value!,
            name: state.name.value!,
            password: state.password.value!,
          })
        ).then(() => {
          history.push('/')
        })
      }
    } else if (type === 'sign-in') {
      setError('')
      if (!/^.+@.+$/.test(state.email.value || '')) {
        setError('Please enter a valid Email address')
        setIsValid(false)
      } else if (
        state.password.value &&
        (state.password.value.length < 6 || state.password.value.length > 40)
      ) {
        setError('Password must be minimum 6 and maximum 40 characters long.')
        setIsValid(false)
      } else {
        setIsValid(true)
        setError('')
        dispatch(
          signIn({
            email: state.email.value!,
            password: state.password.value!,
          })
        ).then(() => {
          history.push('/')
        })
      }
    }
  }
  return (
    <section className="form">
      <h2 className="form__title">
        {type === 'sign-in' ? 'Sign In' : 'Sign Up'}
      </h2>
      <form className="form__form" onSubmit={handleSubmit}>
        <div
          className={`form__warning ${
            isValid === false ? 'form__warning--open' : ''
          }`}>
          {error}
        </div>
        {Object.keys(fields).map((key) => (
          <Fragment key={key}>
            <InputField
              input={state[key].value || ''}
              placeholder={state[key].placeholder}
              setInput={(value) => {
                setIsValid(true)
                setError('')
                setState((state) => ({
                  ...state,
                  [key]: { ...state[key], value },
                }))
              }}
              label={state[key].label}
              type={state[key].type}
              id={state[key].id}
              focus={() => {
                setState((state) => ({
                  ...state,
                  [key]: { ...state[key], placeholder: '' },
                }))
              }}
              blur={(placeholder) => {
                setState((state) => ({
                  ...state,
                  [key]: { ...state[key], placeholder },
                }))
              }}
            />
          </Fragment>
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
  )
}

export default Form
