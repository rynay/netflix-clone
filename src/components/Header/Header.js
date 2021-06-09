const Header = ({ navigation, children, footer }) => {
  return (
    <div className="header">
      <div className="header__backgroundImageContainer">
        <img
          aria-hidden
          src="/images/misc/home-bg-small.jpg"
          srcset="/images/misc/home-bg-small.jpg 1000w, 
        /images/misc/home-bg-medium.jpg 1500w, 
        /images/misc/home-bg-large.jpg 1800w"
          alt=""
        />
      </div>
      <div aria-hidden className="header__overlay"></div>
      <div className="container">
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
