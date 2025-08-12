import React, { useEffect } from 'react'
import Canvas3D from './Canvas3D'

const AboutPage = () => {
  useEffect(() => {
    console.log("Hellow")
  
  }, [])
  

  return (
    <div className='snap-start relative overflow-hidden h-screen w-screen hover:cursor-default'>
      {typeof window !== 'undefined' && <Canvas3D />}
    </div>
  )
}

export default AboutPage