import BackgroundVideo from "./UI/BackgroundVideo/BackgroundVideo"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />
      <div className="relative z-10">
        {/* Your Header will automatically be rendered here via layout.tsx */}
        <div className="flex items-center justify-center h-screen text-white">
          <h1 className="text-5xl font-bold">Welcome to SunSpear Games</h1>
        </div>
      </div>
    </div>
  )
}
