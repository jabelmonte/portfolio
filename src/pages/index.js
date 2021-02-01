import React from "react"
import { GlobalStyle } from '../styles/globalStyle'

import Layout from "../components/layout"
import Intro from "../components/sections/intro"
import SEO from "../components/seo"
import About from "../components/sections/about"
import Contact from "../components/sections/contact"
import Projects from "../components/sections/projects"

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <SEO title="Home" />
    <Intro />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
