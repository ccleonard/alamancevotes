import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/alamance-votes-4.png" // Tell webpack this JS file uses this image

function HeaderImg() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />
}

const Header = () => (
  <header>
    <div
    className="header__wrapper"
      style={{
        margin: `0 auto`,
        maxWidth: 1080,
        borderBottom: `1px solid #FFFFFF`,
      }}
    >
        <Link
          to="/"
        >
        <div class="header__logo">
        <HeaderImg></HeaderImg>
        </div>
        </Link>
        <div className="header__menu">
          <Link
            className="header__link"
            to="/election-sites/"
          >
            Election Sites
          </Link>
          <Link
            className="header__link"
            to="/candidates/"
          >
            Candidates
          </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
