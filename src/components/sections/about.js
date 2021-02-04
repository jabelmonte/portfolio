import React from "react"
import Styled from "styled-components"

const StyledAboutContainer = Styled.section`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    border-width: 0;
    margin-bottom: 10em;
    display: flex;
    justify-content: center;
    padding: 5px;
    font-family: 'NexaLight';
    background-color: lightsalmon;
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

function About({about}) {
  return (
    <StyledAboutContainer>
      <StyledAboutTextBox>
      <h1 id={'about'}>About Me: </h1>
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
