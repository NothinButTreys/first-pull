/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Container from "@material-ui/core/Container"
import Header from "./header"
import Hero from "./hero"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Hero />
      <main>
        <Container
          maxWidth="md"
          style={{
            backgroundColor: "rgb(29 29 29)",
            padding: "15px",
          }}
        >
          {children}
        </Container>
      </main>
      <footer>
        <Container maxWidth="md">
          © {new Date().getFullYear()}, Built by Kaifel of <b>First Pull</b>
        </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
