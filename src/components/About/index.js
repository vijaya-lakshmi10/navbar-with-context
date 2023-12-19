// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgClassName = isDarkTheme ? 'bg-dark' : 'bg-light'
      const bgImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const bgTextClassName = isDarkTheme ? 'bg-dark-text' : 'bg-light-text'
      return (
        <div className={`about-container ${bgClassName}`}>
          <Navbar />
          <div className="about-sub-container">
            <div className="sub-container">
              <img src={bgImageUrl} alt="about" className="about-img" />
              <h1 className={`about-heading ${bgTextClassName}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
