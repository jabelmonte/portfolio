import React from "react"
import styled from "styled-components"

function Intro() {
  return (
    <StyledIntroContainer>
      <StyledIntroHeadings>
        <p>Hi i'm</p>
        <h2>JOHN ARON</h2> 
      </StyledIntroHeadings>
      <StyledIntroH2>
        <h3>I build things of interest</h3>
      </StyledIntroH2>
      <p>
        I'm a software engineer living in the
        <span className="importantText"> city of Quezon</span>,
        <br></br>
        I continue learning technologies that could benefit with the internet
      </p>
    </StyledIntroContainer>
  )
}

const StyledIntroContainer = styled.section`
  max-width: 900px;
  margin: 0 auto;
  border-width: 0;
  margin-top: 14em;
  margin-bottom: 16em;
  width: 100%;
  padding: 5px;
  p {
      font-size: 1.2rem;
      font-family: 'NexaBold';
   }
`
const StyledIntroHeadings = styled.h2`
  margin: 0 auto;
  padding: 0;
`
const StyledIntroH2 = styled.h3`
  margin: 0 auto;
  padding: 0;
`

export default Intro
