import { JSXElementConstructor, ReactChild, ReactComponentElement } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  navigation?: ReactComponentElement<JSXElementConstructor<any>>
  children: ReactChild
  footer?: ReactComponentElement<JSXElementConstructor<any>>
  bg?: ReactComponentElement<JSXElementConstructor<any>>
}

const Header = ({ navigation, children, footer, bg }: Props) => {
  return (
    <div className="header">
      <div className="header__backgroundImageContainer">{bg}</div>
      <div aria-hidden className="header__overlay"></div>
      <div className="header__container">
        <header className="header__top">
          <Link to="/" className="header__logoContainer">
            <img src="/images/misc/logo.svg" alt="Netflix Logo" />
          </Link>
          <div className="header__interactiveElements">{navigation}</div>
        </header>
        <div className="header__content">{children}</div>
        {footer}
      </div>
    </div>
  )
}

export default Header
