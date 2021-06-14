const MainHeaderContent = ({ openModal }) => {
  return (
    <section className="mainHeaderContent">
      <h2 className="mainHeaderContent__title">Watch Joker Now</h2>
      <p className="mainHeaderContent__text">
        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection
        as he walks the streets of Gotham City. Arthur wears two masks -- the
        one he paints for his day job as a clown, and the guise he projects in a
        futile attempt to feel like he's part of the world around him.
      </p>
      <button
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            openModal();
          }
        }}
        onClick={openModal}
        className="mainHeaderContent__button">
        Play
      </button>
    </section>
  );
};

export default MainHeaderContent;
