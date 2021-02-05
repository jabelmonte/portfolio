import React from "react"
import { GlobalStyle } from '../styles/globalStyle'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/sections/intro"
import Experience from "../components/sections/experience"
import About from "../components/sections/about"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <SEO title="John Aron Belmonte | Welcome!" />
    <Intro />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
