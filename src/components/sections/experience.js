import React from "react"
import Image from "../image"
import styled from 'styled-components'

const StyledExperienceContainer = styled.section`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  border-width: 0;
  padding: 5px;
  margin-bottom: 12em;
  background-color: lemonchiffon;
`
function Experience({experience}) {
  return (
    <StyledExperienceContainer>
    <div>
      <h1 id={'experience'}>Experience Section</h1>
      <Image />
    </div>
    </StyledExperienceContainer>
  )
}

export default Experience
