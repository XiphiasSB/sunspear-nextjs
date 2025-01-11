'use client'

const BackgroundVideo = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <video
        src="https://sunspeargames.com/wp-content/uploads/2024/05/Immortal-Homepage-Web_v001-COMPRESSED.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // Preloads video for faster playback
        className="
          absolute
          top-0
          left-0
          w-full
          h-full
          object-cover
          object-top
          pointer-events-none
        "
      >
        {/* Fallback text for unsupported browsers */}
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default BackgroundVideo