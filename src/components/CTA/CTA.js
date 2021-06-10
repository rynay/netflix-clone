import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { InputField } from '../InputField';

export const CTA = () => {
  const [input, setInput] = useState('');
  const [placeholder, setPlaceholder] = useState('Email address');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
          setPlaceholder={setPlaceholder}
          label={'Email address'}
          type={'email'}
          id={'email'}
        />
        <button className="CTA__button button button--large button--form">
          <span className="text">Get Started</span>
          <span className="icon">
            <FaChevronRight />
          </span>
        </button>
      </form>
    </section>
  );
};
