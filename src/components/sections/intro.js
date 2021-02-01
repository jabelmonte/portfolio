import React from "react"
import styled from "styled-components"

const StyledIntroContainer = styled.section`
  max-width: 900px;

  h1 {
      font-size: var(--fs-xxl);
      font-family: 'NexaLight', serif;
  }
`
const Styledh1 = styled.h1`
  font-size: 4rem;
  color: red;
`
function Intro() {
  return (
    <StyledIntroContainer>
      <Styledh1>Hi I'm </Styledh1>
      <br></br>
      <h1>John Aron Belmonte!</h1>
      <br></br>
      <p>I'm a software engineer living in the city of Quezon,
        building amateur stuff of things that strikes my interest.</p>
    </StyledIntroContainer>
  )
}

export default Intro
