import React, { useState } from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import pdf from '../images/media/CV_John_Aron_Belmonte.pdf'

function Nav() {
  const [nav, showNav] = useState(false)
  return (
    <nav>
        <StyledNav>
          <DesktopWrapper>
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
          </DesktopWrapper>
          <StyledMenu nav={nav} onClick={() => showNav(!nav)}>
            <div />
            <div />
            <div />
          </StyledMenu>
          <MenuLinks nav={nav}>
            <ul>
              <li>
                <button className="navButton" onClick={() => scrollTo("#about")}>
                  About
                </button>
              </li>
              <li>
                <button className="navButton" onClick={() => scrollTo("#contact")}>
                  Contact
                </button>
              </li>
              <li>
                <button className="navButton" onClick={() => scrollTo("#experience")}>
                    Experiences
                </button>
              </li>
              <li>
                <button className="navButton" onClick={() => scrollTo("#contact")}>
                  Contact
                </button>
              </li>
              <li>
                <StyledResume>
                  <StyledButtonDivs>
                    <a className="button" href={pdf} target='_blank' rel='noopener noreferrer'>
                      Resume
                    </a>
                  </StyledButtonDivs>
                </StyledResume>
              </li>
            </ul>
          </MenuLinks>
        </StyledNav>
    </nav>
  )
}

const DesktopWrapper = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  padding: 0, auto;
  width: 100%;
  height: 5rem;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 768px) {
    display: none;
  }
`
const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  padding: 0, 50px;
  width: 100%;
  height: 5em;
  background-color: var(--main-background-color);
`
const StyledMenu = styled.button`
  display: none;

  @media (max-width: 768px){
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 5;
    outline: none;

    div {
      width: 1.8rem;
      height: 0.2rem;
      background: #fff;
      border-radius: 5px;
      transform-origin: 1px;
      position: relative;
      transition: opacity 300ms, transform 300ms;

      :first-child {
        transform: ${({ nav }) => (nav ? "rotate(35deg)" : "rotate(0)")};
      }
      :nth-child(2) {
        opacity: ${({ nav }) => (nav ? "0" : "1")};
      }
      :nth-child(3) {
        transform: ${({ nav }) => (nav ? "rotate(-35deg)" : "rotate(0)")};
      }
    }
  }
`
const MenuLinks = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100%;
    background: var(--main-background-color);
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 300ms;
    transform: ${({nav}) => (nav ? "translateX(0)" : "translateX(100%)")};

    ul {
      list-style-type: none;
    }
    button:hover {
      color: var(--color-dark);
    }
  }
`
// const StyledNav = styled.nav`
//   display: flex;
//   position: relative;
//   width: 100%;
//   height: 100%;
// `
const StyledResume = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledLinks = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 6em;
`
const StyledButtonDivs = styled.div`
  margin: 4em;
  padding: 0 auto;

  @media (max-width: 1080px) {
    margin: 1em;
    padding: 0.5em;
  }
`

export default Nav
