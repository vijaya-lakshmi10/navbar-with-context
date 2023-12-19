// Write your code here
import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundBgClassName = isDarkTheme
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'
      const notFoundBgHeading = isDarkTheme
        ? 'not-found-bg-dark-heading'
        : 'not-found-bg-light-heading'
      const notFoundBgTextClassName = isDarkTheme
        ? 'not-found-bg-dark-text'
        : 'not-found-bg-light-text'
      return (
        <div className={`not-found-container ${notFoundBgClassName}`}>
          <Navbar />
          <div className="not-found-sub-container">
            <div className="sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                className="not-found-img"
                alt="not found"
              />
              <h1 className={`not-found-heading ${notFoundBgHeading}`}>
                Lost Your Way?
              </h1>
              <p className={`not-found-desc ${notFoundBgTextClassName}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
