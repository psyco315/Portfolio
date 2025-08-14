import { useState, useRef, useEffect, useCallback } from 'react'
import LandingPage from './components/LandingPage'
import ProjectPage from './components/ProjectPage'
import AboutPage from './components/AboutPage'
import CustomScrollbar from './components/CustomScrollbar'
import './scrollbar.css'

function App() {
  const [currPage, setCurrPage] = useState(0)
  const scrollRef = useRef(null)

  // const scrollToPage = useCallback((pageIndex) => {
  //   if (!scrollRef.current) return
  //   const sectionHeight = window.innerHeight
  //   scrollRef.current.scrollTo({
  //     top: pageIndex * sectionHeight,
  //     behavior: 'smooth'
  //   })
  //   setCurrPage(pageIndex)
  // }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const sectionHeight = window.innerHeight
      const pageIndex = Math.round(container.scrollTop / sectionHeight)

      setCurrPage((prev) => (prev !== pageIndex ? pageIndex : prev))
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={scrollRef}
      className="h-screen overflow-y-auto snap-y snap-mandatory"
    >
      <LandingPage />
      <ProjectPage />
      <AboutPage />
      <CustomScrollbar pageNo={currPage} scrollRef={scrollRef} />
    </div>
  )
}

export default App
