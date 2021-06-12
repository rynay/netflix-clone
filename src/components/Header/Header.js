const Header = ({ navigation, children, footer, bg }) => {
  return (
    <div className="header">
      <div className="header__backgroundImageContainer">{bg}</div>
      <div aria-hidden className="header__overlay"></div>
      <div className="header__container">
        <header className="header__top">
          <div className="header__logoContainer">
            <img src="/images/misc/logo.svg" alt="Netflix Logo" />
          </div>
          <div className="header__interactiveElements">{navigation}</div>
        </header>
        <div className="header__content">{children}</div>
        {footer}
      </div>
    </div>
  );
};

export default Header;
