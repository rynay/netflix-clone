import { useState, useEffect, createRef } from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch, FaSignOutAlt, FaSortDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootStore } from '../../redux/store'
import { logout } from '../../redux/AC'

type Props = {
  search: (query?: string) => void
}

const MainHeaderNavigation = ({ search }: Props) => {
  const dispatch: AppDispatch = useDispatch()
  const currentWatcher = useSelector(
    (store: RootStore) => store.currentWatcher.value
  )

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
  const [input, setInput] = useState('')
  const searchRef = createRef<HTMLInputElement>()

  useEffect(() => {
    if (input.trim().length >= 3) {
      search(input.trim())
    } else {
      search()
    }
  }, [input])

  useEffect(() => {
    if (!isSearchBarOpen) return
    if (!searchRef.current) return
    searchRef.current.focus()
  }, [isSearchBarOpen])

  useEffect(() => {
    const handleClick = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
      if (isSearchBarOpen && !input.trim().length) {
        setIsSearchBarOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
      if (e.key === 'Escape' && isSearchBarOpen && !input.trim().length) {
        setIsSearchBarOpen(false)
      }
    }
    document.body.addEventListener('click', handleClick)
    document.body.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.removeEventListener('click', handleClick)
      document.body.removeEventListener('keydown', handleKeyDown)
    }
  }, [input, isMenuOpen, isSearchBarOpen])

  return (
    <div className="mainHeader">
      <div className="mainHeader__group mainHeader__group--left">
        <nav className="mainHeader__nav">
          <NavLink
            className="mainHeader__navLink"
            activeClassName="mainHeader__navLink--active"
            to="/browse/films">
            films
          </NavLink>
          <NavLink
            className="mainHeader__navLink"
            activeClassName="mainHeader__navLink--active"
            to="/browse/series">
            series
          </NavLink>
        </nav>
      </div>
      <div className="mainHeader__group mainHeader__group--right">
        <form onSubmit={(e) => e.preventDefault()} className="mainHeader__form">
          <button
            className="mainHeader__searchButton"
            onClick={(e) => {
              e.stopPropagation()
              if (input.trim().length) return
              setIsSearchBarOpen((state) => !state)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (input.trim().length) return
                setIsSearchBarOpen((state) => !state)
              }
            }}
            type="button">
            <FaSearch />
          </button>
          <input
            onClick={(e) => e.stopPropagation()}
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
            e.stopPropagation()
            if (!isMenuOpen) setIsMenuOpen(true)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setIsMenuOpen((state) => !state)
            }
          }}
          aria-hidden>
          <img
            src={currentWatcher?.photoURL || currentWatcher?.photo || ''}
            alt=""
          />
          <FaSortDown />
        </button>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`mainHeader__menu ${
            isMenuOpen ? 'mainHeader__menu--open' : ''
          }`}>
          <a href="#1" className="mainHeader__profile">
            <img
              src={currentWatcher?.photoURL || currentWatcher?.photo || ''}
              alt=""
            />
            <span>
              {currentWatcher?.displayName ||
                currentWatcher?.username ||
                currentWatcher?.name}
            </span>
          </a>
          <button
            className="mainHeader__logout"
            onClick={() => dispatch(logout())}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                return dispatch(logout())
              }
            }}>
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainHeaderNavigation
