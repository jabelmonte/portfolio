import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  padding: 0, 50px;
  width: 100%;
  height: 6em;
`
const StyledNav = styled.nav`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`
const StyledResume = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledLinks = styled.div`
  height: 100%;
  flex-grow: 9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 6em;
`
const StyledButtonDivs = styled.div`
  margin: 4em;
  padding: 0 auto;
`

function Nav() {
  return (
    <nav>
      <StyledHeader>
        <StyledNav>
          <StyledLinks>
            <StyledButtonDivs>
              <button className="navButton" onClick={() => scrollTo("#about")}>
                About
              </button>
            </StyledButtonDivs>
            <StyledButtonDivs>
              <button className="navButton" onClick={() => scrollTo("#contact")}>
                Experiences
              </button>
            </StyledButtonDivs>
            <StyledButtonDivs>
              <button className="navButton" onClick={() => scrollTo("#contact")}>
                Projects
              </button>
            </StyledButtonDivs>
            <StyledButtonDivs>
              <button className="navButton" onClick={() => scrollTo("#contact")}>
                Contact
              </button>
            </StyledButtonDivs>
          </StyledLinks>
          <StyledResume>
            <StyledButtonDivs>
              <button className="button" onClick={() => scrollTo("#contact")}>
                Resume
              </button>
            </StyledButtonDivs>
          </StyledResume>
        </StyledNav>
      </StyledHeader>
    </nav>
  )
}

export default Nav
