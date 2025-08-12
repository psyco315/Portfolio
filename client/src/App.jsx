import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import LandingPage from './components/LandingPage'
import ProjectPage from './components/ProjectPage'
import AboutPage from './components/AboutPage'
import './scrollbar.css'

function App() {

  return (
    <>
      <div className='h-screen overflow-y-auto snap-y snap-mandatory'>
        <LandingPage />
        <AboutPage />
        <ProjectPage />
      </div>
    </>
  )
}

export default App
