import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import pdf from '../images/media/CV_John_Aron_Belmonte.pdf'

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
              <button
                className="navButton"
                onClick={() => scrollTo("#experience")}
              >
                Experiences
              </button>
            </StyledButtonDivs>
            <StyledButtonDivs>
              <button
                className="navButton"
                onClick={() => scrollTo("#projects")}
              >
                Projects
              </button>
            </StyledButtonDivs>
            <StyledButtonDivs>
              <button
                className="navButton"
                onClick={() => scrollTo("#contact")}
              >
                Contact
              </button>
            </StyledButtonDivs>
          </StyledLinks>
          <StyledResume>
            <StyledButtonDivs>
              <a className="button" href={pdf} target='_blank' rel='noopener noreferrer'>
                Resume
              </a>
            </StyledButtonDivs>
          </StyledResume>
        </StyledNav>
      </StyledHeader>
    </nav>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  padding: 0, 50px;
  width: 100%;
  height: 5em;
  background-color: var(--main-background-color);
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

export default Nav
