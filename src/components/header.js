import React from "react"
import PropTypes from "prop-types"
import styled, { css } from 'styled-components'

const StyledHeader = styled.header`
  position: sticky;
  width: 100%;
  top: 0;
  padding: 0, 20px;
  background-color: var(--text-color-second-base);
`

const StyledHeaderLinks = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 10px;
`
const Header = ({ siteTitle }) => (
  <StyledHeader>
  <header>
    <div>
      <h1>aaa</h1>
    </div>
  </header>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
