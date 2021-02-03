import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  padding: 0, 50px;
  width: 100%;
  height: 4em;
  background-color: pink;
`
const StyledNav = styled.nav`
    display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: green;
`
const StyledLogo = styled.div`
    height: 100%;
    flex-grow: 6;
  margin-left: auto;
  justify-content: flex-start;
  background-color: blue;
`
const StyledLinks = styled.div`
    height: 100%;
    flex-grow: 4;
  margin-right: auto;
  justify-content: flex-end;
  align-items: center;
  background-color: violet;
  ul{
      list-style-type: none;
      margin: 0;
      padding: 50;
      background-color: yellow;

      li{
          margin: 0;
          position: relative;
          font-size: var(--fs-xl);
      }
  }
`

function Nav() {
  return (
    <nav>
      <StyledHeader>
        <StyledNav>
          <StyledLogo>Hello?</StyledLogo>
          <StyledLinks>
            <li><button onClick={() => scrollTo("#about")}>About</button></li>
            <li><button onClick={() => scrollTo("#contact")}>Job</button></li>
            <li><button onClick={() => scrollTo("#contact")}>Contact</button></li>
          </StyledLinks>
        </StyledNav>
      </StyledHeader>
    </nav>
  )
}

export default Nav
