import Canvas3D from './Canvas3D'

const AboutPage = () => {
  return (
    <div className='snap-start relative overflow-hidden h-screen w-screen hover:cursor-default'>
      {typeof window !== 'undefined' && <Canvas3D />}
    </div>
  )
}

export default AboutPage