import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const Projects = ({projects}) => {
  const data = useStaticQuery(graphql `
    query projectsQuery {
      allProjectsJson {
        edges {
          node {
            projectName
            projectDescription
            alt
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid

                }
              }
            }
          }
        }
      }
    }
  `)

  function getProjects(data) {
    const projectsArray = []
    data.allProjectsJson.edges.forEach((item, index) => {
      projectsArray.push(
        <div key={index}>
          <ProjectCard>
            <ProjectImage src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid} />
            <ProjectInfoWrapper>
              <h4> {item.node.projectName} </h4> <br />
            </ProjectInfoWrapper>
            <ProjectInfoWrapper>
            <p> {item.node.projectDescription} </p>
            </ProjectInfoWrapper>
          </ProjectCard>
        </div>
      )
    })
    return projectsArray
  }

  return (
    <StyledProjectContainer>
      <h1 className="anchor" id={'projects'}>.</h1>
    <Line><h1><span>Stuff I built</span></h1></Line>
    <ProjectWrapper>{getProjects(data)}
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
  padding-top: 10em;
  margin: 0;
`
const ProjectCard = styled.div`
  border: 3px solid var(--text-color-second-base);
  border-radius: 2px;
  line-height: 0;
  height: 400px;
  background-color: green;
`
const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: relative;
  padding: 0;
  margin: 0;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`
const ProjectInfoWrapper = styled.div`
  background-color: var(--main-background-color-brighter);
  padding: 10px;
  margin: 0;
  max-width: 100%;
  max-height: 100%;
  align-items: center;
`

const Line = styled.h1`
  h1{
    width: 100%;
    text-align: center;
    border-bottom: 1px solid var(--text-color-base);
    line-height: 0.01px;
    padding: 10px 0 -10px;
  }
`

export default Projects
