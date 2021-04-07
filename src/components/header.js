import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
import "./navigation.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <Container maxWidth="md">
      <nav role="navigation">
        <ul className="navigation">
          <li className="navigationItem">
            <Link to="/">Home</Link>
          </li>
          <li className="navigationItem">
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
