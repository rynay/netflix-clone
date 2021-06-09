import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { InputField } from '../InputField';

const PromoHeaderContent = () => {
  const [input, setInput] = useState('');
  const [placeholder, setPlaceholder] = useState('Email address');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="first-screen">
      <h1 className="first-screen__title">
        Unlimited movies, TV shows, and more.
      </h1>
      <h2 className="first-screen__subtitle">
        Watch anywhere. Cancel anytime.
      </h2>
      <p className="first-screen__text">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form className="first-screen__form" onSubmit={handleSubmit}>
        <InputField
          input={input}
          placeholder={placeholder}
          setInput={setInput}
          setPlaceholder={setPlaceholder}
          label={'Email address'}
          type={'email'}
          id={'email'}
        />
        <button className="first-screen__button button button--large button--form">
          <span className="text">Get Started</span>
          <span className="icon">
            <FaChevronRight />
          </span>
        </button>
      </form>
    </section>
  );
};
export default PromoHeaderContent;
