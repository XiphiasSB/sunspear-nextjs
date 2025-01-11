'use client'

import { useEffect, useState } from 'react'
import BackgroundVideo from './UI/BackgroundVideo/BackgroundVideo'
import Logo from './UI/Logo/Logo'
import ChooseImmortal from './UI/ChooseImmortal/ChooseImmortal'
import ScrollDownBtn from './UI/ScrollDownBtn/ScrollDownBtn'

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* 1) Fullscreen "hero" section */}
      <div className="relative h-screen"> 
        {/* Video behind everything */}
        <BackgroundVideo /> 
      
        {/* Logo on top */}
        <div className="relative z-10">
          <Logo isVisible={isVisible} />
        </div>

        {/* The scroll-down button also inside this hero section,
            pinned to bottom-8, so it’s at the bottom of the screen. */}
        <ScrollDownBtn
          targetId="choose-immortal"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        />
      </div>

      {/* 2) Next section starts below */}
      <ChooseImmortal />
    </>
  )
}

export default HomePage
