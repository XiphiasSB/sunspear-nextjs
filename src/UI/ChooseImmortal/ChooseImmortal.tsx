'use client'

import { useState } from 'react'
import Image from 'next/image'

type Thumbnail = {
  id: number
  src: string
  alt: string
  image: string
  name: string
  title: string
  color: string
}

const thumbnails: Thumbnail[] = [
  { id: 1, src: 'https://sunspeargames.com/wp-content/uploads/2024/07/Orzum-Thumbnail.png', alt: 'Orzum', image: 'https://sunspeargames.com/wp-content/uploads/2024/06/Orzum-Image.png', name: 'Orzum', title: 'Arash of Reclamation', color: '#6C65C9' },
  { id: 2, src: 'https://sunspeargames.com/wp-content/uploads/2024/07/Ajari-Thumbnail.png', alt: 'Ajari', image: 'https://sunspeargames.com/wp-content/uploads/2024/06/Ajari-Image-No-Background.png', name: 'Ajari', title: 'Arash of Deliverance', color: '#6C65C9' },
  { id: 3, src: 'https://sunspeargames.com/wp-content/uploads/2024/07/Mala-Thumbnail.png', alt: 'Mala', image: 'https://sunspeargames.com/wp-content/uploads/2024/07/mala-400px.png', name: 'Mala', title: 'Prophet of Blood', color: '#A23333' },
  { id: 4, src: 'https://sunspeargames.com/wp-content/uploads/2024/07/Xol-Thumbnail.png', alt: 'Xol', image: 'https://sunspeargames.com/wp-content/uploads/2024/06/Xol-Image-1.png', name: 'Xol', title: 'Prophet of the Hunt', color: '#A23333' },
]

const ChooseImmortal = () => {
  const [selectedImmortal, setSelectedImmortal] = useState<Thumbnail>(thumbnails[0])
  const [isFading, setIsFading] = useState(false)

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
      id="choose-immortal"
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen p-8 bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://sunspeargames.com/wp-content/uploads/2024/06/Choose-Your-Immortal-bg-1.png)',
      }}
    >
      {/* Left Section: Text and Thumbnails */}
     {/* Text Section */}
    <div className="flex flex-col items-center w-full lg:w-1/3 space-y-6 mb-10 lg:mb-0">
        <div className="text-center">
            <h2 className="text-xl font-italic text-[#144E81] uppercase">Choose Your</h2>
            <h1 className="text-5xl font-bold text-[#A28654]">Immortal</h1>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#2A555C' }}>
            <span className="font-bold">Immortals</span> are the godlike commanders of Creation, leading the armies of their respective factions.
            </p>
        </div>

        {/* Thumbnails */}
        <div className="flex space-x-4">
          {thumbnails.map((thumbnail) => (
            <button
              key={thumbnail.id}
              onClick={() => handleThumbnailClick(thumbnail)}
              className="p-0 transition-transform transform hover:scale-110 focus:outline-none"
            >
              <Image
                src={thumbnail.src}
                alt={thumbnail.alt}
                width={200}
                height={250}
                className="rounded-md"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right Section: Selected Immortal */}
      <div className="w-full lg:w-1/2 flex flex-col items-center relative">
        <div
          className={`relative overflow-hidden transition-opacity duration-700 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ height: '600px', width: '400px', maxWidth: '100%' }} // Set height, width adjusts automatically
        >
          <Image
            src={selectedImmortal.image}
            alt={selectedImmortal.name}
            layout="fill"
            objectFit="contain" // Ensures aspect ratio is preserved
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
  )
}

export default ChooseImmortal
