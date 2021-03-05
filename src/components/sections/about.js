import React from "react"
import Styled from "styled-components"

function About({about}) {
  return (
    <StyledAboutContainer>
      <h1 className="anchor" id={'about'}>.</h1>
      <Line><h1><span>Nice to meet you</span></h1></Line>
      <AboutContent>
      <p>
        This website of mine is still an ongoing project.
      </p>
      <br></br>
      <p>
        Thanks for being interested.
      </p>
      </AboutContent>
    </StyledAboutContainer>
  )
}

const StyledAboutContainer = Styled.section`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    border-width: 0;
    margin-bottom: 10em;
    text-align: center;
    justify-content: center;
    padding: 5px;
    font-family: 'NexaLight';
`
const AboutContent = Styled.div`
    display: inline-block;
    margin: auto;
    text-align: center;
    justify-content: center;
    width: 50%;
`
const Line = Styled.h1`
  h1{
    width: 100%;
    text-align: center;
    border-bottom: 1px solid var(--text-color-base);
    line-height: 0.01px;
    margin: 10px 0 20px;
  }
`

export default About
