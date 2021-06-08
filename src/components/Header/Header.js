const Header = ({ navigation, children }) => {
  return (
    <div className="header">
      <header className="header__top">
        <div className="header__logoContainer">
          <img src="/images/misc/logo.svg" alt="Netflix Logo" />
        </div>
        <div className="header__interactiveElements">{navigation}</div>
      </header>
      <section className="header__content">{children}</section>
    </div>
  );
};

export default Header;
