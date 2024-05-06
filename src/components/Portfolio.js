import React from 'react'
import About from './About'
import Contact from './Contact'
import Experience from './Experience'
import Header from './Header'
import Header1 from './Header1'
import Projects from './Projects'
import Skills from './Skills'

function Portfolio() {
  return (
    <div>
      <Header1/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Portfolio
