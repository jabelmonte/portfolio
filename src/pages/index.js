import React from 'react'

import Layout from "../components/layout"
import Intro from "../components/sections/intro"
import SEO from "../components/seo"
import About from '../components/sections/about'
import Contact from '../components/sections/contact'
import Projects from '../components/sections/projects'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
