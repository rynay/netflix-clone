import { useEffect, useState, Fragment } from 'react';
import { Preview } from '../Preview';

export const MainContent = ({ content, type, openModal, isModalOpen }) => {
  const [target, setTarget] = useState({});
  const close = () => setTarget({});
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) return;
      if (e.key === 'Escape') {
        console.log('MainContent');
        setTarget({});
      }
    };
    const handleClick = () => {
      if (isModalOpen) return;
      if (target.id) {
        setTarget({});
      }
    };
    document.body.addEventListener('keydown', handleKeyDown);
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
      document.body.removeEventListener('click', handleClick);
    };
  }, [isModalOpen, target]);
  return (
    <article className="mainContent">
      {content &&
        Object.keys(content).map((key) => (
          <Fragment key={key}>
            {content[key].length > 0 && (
              <section className="mainContent__slider">
                <h2 className="mainContent__title">{key}</h2>
                <div className="mainContent__itemsContainer">
                  {content[key].map((item) => (
                    <section
                      onClick={(e) => e.stopPropagation()}
                      className={`mainContent__itemContainer ${
                        item.id === target.id
                          ? 'mainContent__itemContainer--open'
                          : ''
                      }`}>
                      <button
                        onClick={() => {
                          setTarget(item);
                        }}
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
                        onClick={() => {
                          setTarget(item);
                        }}
                        className="mainContent__description">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </section>
                  ))}
                </div>
                {target.id &&
                  content[key].some((item) => item.id === target.id) && (
                    <Preview
                      openModal={openModal}
                      type={type}
                      close={close}
                      content={target}
                    />
                  )}
              </section>
            )}
          </Fragment>
        ))}
    </article>
  );
};
