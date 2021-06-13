import { useState } from 'react';
import { Preview } from '../Preview';

export const MainContent = ({ content, type }) => {
  const [target, setTarget] = useState({});
  const close = () => setTarget({});
  return (
    <article className="mainContent">
      {Object.keys(content).map((key) => (
        <section className="mainContent__slider">
          <h2 className="mainContent__title">{key}</h2>
          <div className="mainContent__itemsContainer">
            {content[key].map((item) => (
              <section
                className={`mainContent__itemContainer ${
                  item.id === target.id
                    ? 'mainContent__itemContainer--open'
                    : ''
                }`}>
                <button
                  onClick={() => setTarget(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setTarget(item);
                    }
                  }}
                  className="mainContent__imageContainer">
                  <img
                    src={`/images/${type}/${item.genre}/${item.slug}/small.jpg`}
                    alt={item.title}
                  />
                </button>
                <div
                  onClick={() => setTarget(item)}
                  className="mainContent__description">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </section>
            ))}
          </div>
          {target.id && content[key].some((item) => item.id === target.id) && (
            <Preview type={type} close={close} content={target} />
          )}
        </section>
      ))}
    </article>
  );
};
