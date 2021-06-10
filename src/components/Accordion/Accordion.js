import { useState } from 'react';
import faqs from '../../fixtures/faqs.json';

export const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const handleSelect = (id) => {
    setSelected(selected !== id ? id : null);
  };
  return (
    <article className="accordion">
      <h2 className="accordion__title">Frequently Asked Questions</h2>
      {faqs.map((faq) => (
        <section
          key={faq.id}
          className={
            selected === faq.id
              ? 'accordion__item accordion__item--open'
              : 'accordion__item'
          }>
          <button
            onClick={() => handleSelect(faq.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSelect(faq.id);
              }
            }}
            role="heading"
            aria-level="3"
            className="accordion__question">
            <span>{faq.header}</span>
            <span className="icon">
              <svg focusable="true">
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </span>
          </button>
          <p className="accordion__answer">{faq.body}</p>
        </section>
      ))}
    </article>
  );
};
