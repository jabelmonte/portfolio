import React from "react"
import styled from 'styled-components'

function Experience({experience}) {
  return (
    <StyledExperienceContainer>
      <h1 className="anchor" id={'experience'}>.</h1>
      <Line><h1><span>My journey so far</span></h1></Line>
    <ExperienceContent>
      <p classname="descriptiveText">
        I will be landing my first job at Accenture
      </p>
    </ExperienceContent>
    </StyledExperienceContainer>
  )
}

const StyledExperienceContainer = styled.section`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  border-width: 0;
  padding: 5px;
  margin-bottom: 12em;
  font-family: 'NexaLight';
`
const ExperienceContent = styled.div`
  display: flexbox;
  text-align: center;
  justify-content: center;
  padding: 4px;
  margin-left: 10%;
  margin-right: 10%;
`
const Line = styled.h1`
  h1{
    width: 100%;
    text-align: center;
    border-bottom: 1px solid var(--text-color-base);
    line-height: 0.01px;
    margin: 10px 0 20px;
  }
`

export default Experience
