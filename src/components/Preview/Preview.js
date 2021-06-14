import { useRef, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';

export const Preview = ({ close, content, type, openModal }) => {
  const ref = useRef();
  useEffect(() => {
    if (!ref) return;
    ref.current.focus();
  }, [ref]);
  return (
    <section onClick={(e) => e.stopPropagation()} className="preview">
      <img
        className="preview__background"
        src={`/images/${type}/${content.genre}/${content.slug}/large.jpg`}
        alt=""
      />
      <div className="preview__content">
        <h2 className="preview__title">{content.title}</h2>
        <p className="preview__description">{content.description}</p>
        <p className="preview__age" aria-label="minimum age">
          {content.maturity}+
        </p>
        <button
          onClick={openModal}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              openModal();
            }
          }}
          className="preview__play">
          Play
        </button>
      </div>
      <button
        onClick={close}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            close();
          }
        }}
        className="preview__close"
        aria-label="close popup"
        ref={ref}>
        <FaPlus />
      </button>
    </section>
  );
};