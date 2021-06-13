import { useRef, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';

export const Preview = ({ close, content, type }) => {
  console.log(content);
  const ref = useRef();
  useEffect(() => {
    if (!ref) return;
    ref.current.focus();
  }, []);
  return (
    <section className="preview">
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
        <button className="preview__play">Play</button>
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
