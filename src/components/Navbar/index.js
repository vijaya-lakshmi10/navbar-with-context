// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const navbarBgClassName = isDarkTheme
        ? 'navbar-bg-dark'
        : 'navbar-bg-light'
      const websiteLogoImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const navItemsBgClassName = isDarkTheme
        ? 'nav-item-bg-dark'
        : 'nav-item-bg-light'
      return (
        <div className={`navbar-container ${navbarBgClassName}`}>
          <div className="navbar">
            <img
              src={websiteLogoImageUrl}
              className="website-logo"
              alt="website logo"
            />
            <ul className="nav-list-items">
              <li className="nav-items">
                <Link to="/" className={`nav-link ${navItemsBgClassName}`}>
                  Home
                </Link>
              </li>
              <li className="nav-items">
                <Link to="/about" className={`nav-link ${navItemsBgClassName}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              className="theme-btn"
              data-testid="theme"
              type="button"
              onClick={onToggleTheme}
            >
              <img src={themeImgUrl} className="theme-img" alt="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
