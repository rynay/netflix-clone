import content from '../../fixtures/jumbo.json';
export const Jumbotron = () => {
  return (
    <div className="jumbotron">
      {content.map((item) => (
        <section key={item.id} className="jumbotron__itemContainer">
          <div className="jumbotronContainer">
            <div className="jumbotron__content">
              <h2 className="jumbotron__title">{item.title}</h2>
              <p className="jumbotron__text">{item.text}</p>
            </div>
            <div className="jumbotron__media">
              {!item.video && (
                <img className="jumbotron__image" src={item.image} alt="" />
              )}
              {item.video && (
                <>
                  <img
                    className="jumbotron__imageVideo"
                    src={item.image}
                    alt=""
                  />
                  <video
                    className={`jumbotron__video jumbotron__video--${item.id}`}
                    autoPlay={true}
                    playsInline={true}
                    muted={true}
                    loop={true}>
                    <source src={item.video} type="video/mp4" />
                  </video>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
