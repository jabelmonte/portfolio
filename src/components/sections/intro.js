import React from "react"
import styled from "styled-components"

const StyledIntroContainer = styled.section`
  max-width: 900px;
  margin: 0 auto;

  /* h1 {
      font-size: var(--fs-xxl);
      font-family: 'NexaLight', serif;
      color: var(--text-color-base);
  }
  h2 {
      font-size: var(--fs-xxl);
      font-family: 'NexaLight', serif;
      color: var(--text-color-second-base);
  }
  div {
      margin: 0 auto;
      padding: 0;
      background-color: pink;
      text-align: center;
  } */
`
const StyledIntroHeadings = styled.h1`
    margin: 0 auto;
    font-size: var(--fs-xxl);
    font-family: 'NexaLight', serif;
    color: var(--text-color-base);
`
const StyledIntroH2 = styled.h2`
    margin: 0 auto;
    font-size: var(--fs-xxl);
    color: var(--text-color-second-base);
`
function Intro() {
  return (
    <StyledIntroContainer>
      <StyledIntroHeadings>
      <h1>Hi I'm </h1>
      </StyledIntroHeadings>
      <StyledIntroH2>
      <h2>John Aron Belmonte!</h2>
      </StyledIntroH2>
      <p>I'm a software engineer living in the city of Quezon,
        building amateur stuff of things that strikes my interest.</p>
    </StyledIntroContainer>
  )
}

export default Intro
