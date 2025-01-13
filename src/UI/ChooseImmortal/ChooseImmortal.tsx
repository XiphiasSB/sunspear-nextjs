'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { thumbnails } from './Thumbnails'

type Thumbnail = {
  id: number
  src: string
  alt: string
  image: string
  name: string
  title: string
  color: string
}

const ChooseImmortal = () => {
  const [selectedImmortal, setSelectedImmortal] = useState<Thumbnail>(thumbnails[0])
  const [isFading, setIsFading] = useState(false) // fade-out/fade-in for thumbnail changes
  const [isVisible, setIsVisible] = useState(false) // scroll-based fade-in
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const handleThumbnailClick = (thumbnail: Thumbnail) => {
    if (thumbnail.id === selectedImmortal.id) return
    setIsFading(true)
    setTimeout(() => {
      setSelectedImmortal(thumbnail)
      setIsFading(false)
    }, 300)
  }

  return (
    <div
      ref={sectionRef}
      id="choose-immortal"
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          'url(https://sunspeargames.com/wp-content/uploads/2024/06/Choose-Your-Immortal-bg-1.png)',
      }}
    >
      <div
        className={`relative flex flex-col lg:flex-row items-center justify-center min-h-screen transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* LEFT SECTION: Text & Thumbnails */}
        <div
          className={`flex flex-col items-center w-full lg:w-[700px] space-y-6 mb-10 lg:mb-0
          px-4 transition-transform duration-1000 ${
            isVisible ? 'translate-x-0' : '-translate-x-10'
          }`}
        >
          <div className="text-center">
            <h2 className="text-xl font-italic text-[#144E81] uppercase">Choose Your</h2>
            <h1 className="text-5xl font-bold text-[#A28654]">IMMORTAL</h1>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#2A555C' }}>
              Immortals are the godlike commanders of Creation, leading the armies of their
              respective factions.
            </p>
          </div>

          <a
            href="/immortals"
            className="bg-[#2A555C] border-4 border-[#679299] text-white uppercase text-base tracking-wider flex items-center justify-center w-[335px] h-[57px] transform transition-transform hover:scale-105"
          >
            <span className="font-semibold">DISCOVER MORE IMMORTALS</span>
          </a>

          {/* Thumbnails in a single row, shrink as viewport narrows */}
          <div className="flex flex-nowrap justify-center items-center space-x-4 w-full">
            {thumbnails.map((thumbnail) => (
              <button
                key={thumbnail.id}
                onClick={() => handleThumbnailClick(thumbnail)}
                className="p-0 transition-transform hover:scale-110"
              >
                {/* Use clamp() to gradually shrink to min size */}
                <div
                  className="rounded-md flex-shrink-0"
                  style={{ width: 'clamp(80px, 10vw, 150px)' }}
                >
                  <Image
                    src={thumbnail.src}
                    alt={thumbnail.alt}
                    layout="responsive"
                    width={250}
                    height={350}
                    className="rounded-md"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION: Selected Immortal */}
        <div
          className={`w-full flex flex-col items-center relative transition-transform duration-1000 ${
            isVisible ? 'translate-x-0' : 'translate-x-10'
          }`}
          // We can let the right section shrink/grow as needed:
          style={{ maxWidth: '800px', width: '100%' }}
        >
          <div
            className={`relative overflow-hidden transition-opacity duration-700 ${
              isFading ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ height: '600px', width: '400px', maxWidth: '100%' }}
          >
            <Image
              src={selectedImmortal.image}
              alt={selectedImmortal.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div
            className={`text-center mt-4 transition-opacity duration-700 ${
              isFading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <h2
              className="text-2xl font-bold uppercase"
              style={{ color: selectedImmortal.color }}
            >
              {selectedImmortal.name}
            </h2>
            <p className="text-sm font-medium uppercase text-gray-600 mt-1">
              {selectedImmortal.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseImmortal
