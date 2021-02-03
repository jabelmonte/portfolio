import React from "react"
import styled from "styled-components"

const StyledIntroContainer = styled.section`
  max-width: 900px;
  margin: 0 auto;
  border-width: 0;
  margin-top: 8em;
  margin-bottom: 4em;
  width: 100%;
  padding: 5px;
`
const StyledIntroHeadings = styled.h1`
  margin: 0 auto;
  padding: 0;
  line-height: 0.1;
  font-size: var(--fs-xxl);
  font-family: 'NexaLight';
  color: var(--text-color-base);
`
const StyledIntroH2 = styled.h2`
  margin: 0 auto;
  padding: 0;
  line-height: 0.1;
  font-size: var(--fs-xxl);
  font-family: 'NexaBold';
  color: var(--text-color-second-base);
`
function Intro() {
  return (
    <StyledIntroContainer>
      <StyledIntroHeadings>
        <p>Hello there! I'm</p>
        <h1>Aron!</h1> 
      </StyledIntroHeadings>
      <StyledIntroH2>
        <h2>what am i even doing</h2>
      </StyledIntroH2>
      <p>
        I'm a software engineer living in the
        <span className="importantText"> city of Quezon</span>,
        <br></br>
        building amateur
        stuff of things that strikes my interest.
      </p>
    </StyledIntroContainer>
  )
}

export default Intro
