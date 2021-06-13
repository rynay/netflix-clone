export const MainContent = ({ content, type }) => {
  return (
    <article className="mainContent">
      {Object.keys(content).map((key) => (
        <section className="mainContent__slider">
          <h2 className="mainContent__title">{key}</h2>
          <div className="mainContent__itemsContainer">
            {content[key].map((item) => (
              <section className="mainContent__itemContainer">
                <button className="mainContent__imageContainer">
                  <img
                    src={`/images/${type}/${item.genre}/${item.slug}/small.jpg`}
                    alt={item.title}
                  />
                </button>
                <div className="mainContent__description">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </section>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
};
