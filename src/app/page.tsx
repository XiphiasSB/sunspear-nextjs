'use client'

import { useEffect, useState } from 'react'
import BackgroundVideo from './UI/BackgroundVideo/BackgroundVideo'
import Logo from './UI/Logo/Logo'
import ChooseImmortal from './UI/ChooseImmortal/ChooseImmortal'

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100) // Delay for fade-in
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="relative min-h-screen">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <BackgroundVideo />
        </div>

        {/* Logo and Wishlist */}
        <div className="relative z-10">
          <Logo isVisible={isVisible} />
        </div>
      </div>

      {/* Choose Immortal Section */}
      <ChooseImmortal />
    </>
  )
}

export default HomePage
