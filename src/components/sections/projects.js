import React from "react"
import Image from "../image"
import styled from 'styled-components'
import Boop from '../../images/media/boop.png'

function Projects({projects}) {
  return (
    <StyledProjectContainer>
      <h1 className="anchor" id={'projects'}></h1>
    <Line><h1><span>Stuff I built</span></h1></Line>
    <ProjectWrapper>
      <ProjectCapsule>
        <img class="projectThumbnail" src={Boop}></img>
        <ProjectInfoWrapper>
          <h4 className="importantText">Chuguagag</h4>
          <p>weo weo pew pew pew pew</p>
        </ProjectInfoWrapper>
      </ProjectCapsule>

      <ProjectCapsule>
        <img class="projectThumbnail" src={Boop}></img>
        <ProjectInfoWrapper>
          <h4 className="importantText">Some stuff</h4>
          <p>blah blahasdasdsadadasdsadsa</p>
        </ProjectInfoWrapper>
      </ProjectCapsule>
    </ProjectWrapper>
    
    </StyledProjectContainer>
  )
}

const StyledProjectContainer = styled.section`
  overflow: auto;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  border-width: 0;
  padding: 5px;
  margin-bottom: 18em;
  font-family: 'NexaLight';
`
const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  gap: 20px;
  justify-content: center;
  margin-top: 10em;
`
const ProjectCapsule = styled.div`
  border: 3px solid var(--text-color-second-base);
  border-radius: 2px;
`
const ProjectInfoWrapper = styled.div`
  background-color: var(--main-background-color-brighter);
  padding: 15px;
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

export default Projects
