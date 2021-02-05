import React from "react"
import Image from "../image"
import styled from 'styled-components'

const StyledProjectContainer = styled.section`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  border-width: 0;
  padding: 5px;
  margin-bottom: 12em;
  background-color: olivedrab;
`
function Projects({projects}) {
  return (
    <StyledProjectContainer>
      <h1 className="anchor" id={'projects'}></h1>
    <div>
      <h1 id={'projects'}>Project section</h1>
      <Image />
    </div>
    </StyledProjectContainer>
  )
}

export default Projects
