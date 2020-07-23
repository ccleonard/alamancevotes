import { Link } from "gatsby"
import PropTypes from "prop-types"
import Image from "../components/image"
import React from "react"

const Header = () => (
  <header>
    <div
    className="header__menu"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
        >
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        </Link>
      </h1>
      <Link
        className="header__link"
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        test
      </Link>
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
