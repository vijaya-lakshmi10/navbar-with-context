// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeClassName = isDarkTheme ? 'bg-dark' : 'bg-light'
      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeTextClassName = isDarkTheme ? 'bg-dark-text' : 'bg-light-text'
      return (
        <div className={`home-container ${homeClassName}`}>
          <Navbar />
          <div className="home-sub-container">
            <div className="sub-container">
              <img src={homeImageUrl} alt="home" className="home-img" />
              <h1 className={`home-heading ${homeTextClassName}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
