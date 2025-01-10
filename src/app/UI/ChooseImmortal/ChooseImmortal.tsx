'use client'

import { useState } from 'react'
import Image from 'next/image'

const thumbnails = [
  { id: 1, src: 'https://sunspeargames.com/wp-content/uploads/2024/07/Orzum-Thumbnail.png', alt: 'Orzum', image: 'https://sunspeargames.com/wp-content/uploads/2024/06/Orzum-Image.png' },
  { id: 2, src: 'https://sunspeargames.com/wp-content/uploads/2024/07/Ajari-Thumbnail.png', alt: 'Ajari', image: 'https://sunspeargames.com/wp-content/uploads/2024/06/Ajari-Image-No-Background.png' },
  { id: 3, src: 'https://sunspeargames.com/wp-content/uploads/2024/07/Mala-Thumbnail.png', alt: 'Mala', image: 'https://sunspeargames.com/wp-content/uploads/2024/07/mala-400px.png' },
  { id: 4, src: 'https://sunspeargames.com/wp-content/uploads/2024/07/Xol-Thumbnail.png', alt: 'Xol', image: 'https://sunspeargames.com/wp-content/uploads/2024/06/Xol-Image-1.png' },
]

const ChooseImmortal = () => {
  const [selectedImage, setSelectedImage] = useState(thumbnails[0].image) // Default to first thumbnail's image
  const [isFading, setIsFading] = useState(false)

  const handleThumbnailClick = (image: string) => {
    if (image === selectedImage) return // Prevent unnecessary re-rendering

    setIsFading(true) // Trigger fade-out
    setTimeout(() => {
      setSelectedImage(image) // Change the image
      setIsFading(false) // Trigger fade-in
    }, 300) // Duration of the fade-out
  }

  return (
    <div
      className="relative flex items-center justify-between min-h-screen p-8 bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://sunspeargames.com/wp-content/uploads/2024/06/Choose-Your-Immortal-bg-1.png)',
      }}
    >
      {/* Text Section */}
      <div className="flex flex-col items-center w-1/3 space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#144E81] uppercase">Choose Your</h2>
          <h1 className="text-5xl font-bold text-[#A28654]">Immortal</h1>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            <span className="font-bold">Immortals</span> are the godlike commanders of Creation, leading the armies of their respective factions.
          </p>
        </div>

        {/* Thumbnails */}
        <div className="flex space-x-4">
          {thumbnails.map((thumbnail) => (
            <button
              key={thumbnail.id}
              onClick={() => handleThumbnailClick(thumbnail.image)}
              className="p-2 transition-transform transform hover:scale-110 focus:outline-none"
            >
              <Image
                src={thumbnail.src}
                alt={thumbnail.alt}
                width={100} // Adjust thumbnail size
                height={100}
                className="rounded-md"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Selected Immortal */}
      <div className="w-1/2 flex justify-center">
        <Image
          src={selectedImage}
          alt="Selected Immortal"
          width={selectedImage.includes('mala') ? 300 : 500} // Resize Mala
          height={selectedImage.includes('mala') ? 300 : 500}
          className={`rounded-lg transition-opacity duration-700 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
          priority
        />
      </div>
    </div>
  )
}

export default ChooseImmortal
