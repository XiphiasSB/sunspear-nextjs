const BackgroundVideo = () => {
    return (
      <video
        src="https://sunspeargames.com/wp-content/uploads/2024/05/Immortal-Homepage-Web_v001-COMPRESSED.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        Your browser does not support the video tag.
      </video>
    )
  }
  
  export default BackgroundVideo
  