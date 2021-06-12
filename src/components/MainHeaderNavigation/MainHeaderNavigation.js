import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as AC from '../../redux/AC';
import { FaSearch } from 'react-icons/fa';

const MainHeaderNavigation = ({ currentWatcher, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [input, setInput] = useState('');
  const searchRef = useRef();
  useEffect(() => {
    if (!isSearchBarOpen) return;
    searchRef.current.focus();
  }, [isSearchBarOpen]);
  useEffect(() => {
    const handleClick = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      if (isSearchBarOpen) {
        setIsSearchBarOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
      if (e.key === 'Escape' && isSearchBarOpen) {
        setIsSearchBarOpen(false);
      }
    };
    document.body.addEventListener('click', handleClick);
    document.body.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeEventListener('click', handleClick);
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div className="mainHeader">
      <div className="mainHeader__group mainHeader__group--left">
        <nav className="mainHeader__nav">
          <NavLink
            className="mainHeader__navLink"
            activeClassName="mainHeader__navLink--active"
            to="/films">
            films
          </NavLink>
          <NavLink
            className="mainHeader__navLink"
            activeClassName="mainHeader__navLink--active"
            to="/series">
            series
          </NavLink>
        </nav>
      </div>
      <div className="mainHeader__group mainHeader__group--right">
        <form className="mainHeader__form">
          <button
            className="mainHeader__searchButton"
            onClick={(e) => {
              e.stopPropagation();
              setIsSearchBarOpen((state) => !state);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setIsSearchBarOpen((state) => !state);
              }
            }}
            type="button">
            <FaSearch />
          </button>
          <input
            ref={searchRef}
            className={`mainHeader__search ${
              isSearchBarOpen ? 'mainHeader__search--open' : ''
            }`}
            placeholder="search"
            type="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <button
          className="mainHeader__toggleMenu"
          onClick={(e) => {
            e.stopPropagation();
            if (!isMenuOpen) setIsMenuOpen(true);
          }}
          onMouseOver={() => {
            if (!isMenuOpen) setIsMenuOpen(true);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setIsMenuOpen((state) => !state);
            }
          }}
          aria-hidden>
          <img src={currentWatcher.photoURL} alt="" />
          Toggle
        </button>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`mainHeader__menu ${
            isMenuOpen ? 'mainHeader__menu--open' : ''
          }`}>
          <a href="#1">
            <img src={currentWatcher.photoURL} alt="" />
            <span>{currentWatcher.displayName}</span>
          </a>
          <button
            onClick={logout}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                logout();
                // .then(history.push('/promo'));
              }
            }}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentWatcher: state.currentWatcher,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(AC.logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHeaderNavigation);
