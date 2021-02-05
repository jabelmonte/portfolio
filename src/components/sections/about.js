import React from "react"
import Styled from "styled-components"

const StyledAboutContainer = Styled.section`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    border-width: 0;
    margin-bottom: 10em;
    justify-content: center;
    padding: 5px;
    font-family: 'NexaLight';
`
const StyledAboutTextBox = Styled.div`
    order: 1;
    max-width: 50%;
`

const StyledAboutTextImage = Styled.div`
    order:2;
    max-width: 50%;
    width: 100%;
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
function About({about}) {
  return (
    <StyledAboutContainer>
      <Line><h1><span>Nice to meet you</span></h1></Line>
      <StyledAboutTextBox>
      <h1 className="anchor" id={'about'}></h1>
      <h1>About Me: </h1>
      <p className="descriptiveText">Hello! I'm John Aron Belmonte </p>
      <br></br>
      <p className="descriptiveText">
        I'm currently looking for a job here in the city, whether it be on the
        web or the funky enterprise, I'll check any opportunity that comes by.
      </p>
      <br></br>
      <p className="descriptiveText">
        I have started expanding my knowledge on the web as it really piques my
        interests.
      </p>
      </StyledAboutTextBox>
      <StyledAboutTextImage>asdasd</StyledAboutTextImage>
    </StyledAboutContainer>
  )
}

export default About
