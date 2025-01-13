'use client'

import { useEffect, useState } from 'react'
import BackgroundVideo from '@/UI/BackgroundVideo/BackgroundVideo'
import Logo from '@/UI/Logo/Logo'
import ChooseImmortal from '@/UI/ChooseImmortal/ChooseImmortal'
import ScrollDownBtn from '@/UI/ScrollDownBtn/ScrollDownBtn'

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="relative h-screen"> 
        <BackgroundVideo /> 
      
        <div className="relative z-10">
          <Logo isVisible={isVisible} />
        </div>

        <ScrollDownBtn
          targetId="choose-immortal"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        />
      </div>
      <ChooseImmortal />
    </>
  )
}

export default HomePage
