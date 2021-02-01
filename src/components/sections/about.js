import React from "react"
import Styled from "styled-components"

const StyledAboutContainer = Styled.section`
    max-width: 900px;
    background-color: var(--test-background-color);
`

function About() {
  return (
    <StyledAboutContainer>
      <h1>About Me: </h1>
      <p className="descriptiveText">HEHEHEHEHEH</p>
    </StyledAboutContainer>
  )
}

export default About
