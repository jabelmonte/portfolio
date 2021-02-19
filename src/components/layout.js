/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import { GlobalStyle } from "../styles/globalStyle"
import Nav from "./nav"

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
  
  return (data) (
    <>
      <Nav />
      <ContentWrapper>
      <GlobalStyle />
        <main>{children}</main>
      </ContentWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const ContentWrapper = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
`

export default Layout
