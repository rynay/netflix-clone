import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { InputField } from '../InputField'
import { AppDispatch } from '../../redux/store'
import { setSignUpEmail } from '../../redux/reducers/signUpEmailSlice'

const CTA = () => {
  const dispatch: AppDispatch = useDispatch()

  const history = useHistory()
  const [input, setInput] = useState('')
  const [placeholder, setPlaceholder] = useState('Email address')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return
    dispatch(setSignUpEmail(input))
    history.push('/sign-up')
  }

  return (
    <section className="CTA">
      <p className="CTA__text">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form className="CTA__form" onSubmit={handleSubmit}>
        <InputField
          input={input}
          placeholder={placeholder}
          setInput={setInput}
          label={'Email address'}
          type={'email'}
          id={'email'}
          focus={() => setPlaceholder('')}
          blur={(value) => setPlaceholder(value)}
        />
        <button className="CTA__button button button--large button--form">
          <span className="text">Get Started</span>
          <span className="icon">
            <FaChevronRight />
          </span>
        </button>
      </form>
    </section>
  )
}

export default CTA
