'use client'

import Image from 'next/image'
import SecondaryWishlistButton from '../Header/WishlistButton/SecondaryWishlistButton'

const Logo = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen space-y-6 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1000`}
    >
      <Image
        src="https://sunspeargames.com/wp-content/uploads/2024/07/IGP_LogoFull-Light-R.png"
        alt="Immortal: Gates of Pyre"
        width={500} // Adjust width as needed
        height={300} // Adjust height as needed
        priority
      />
      <SecondaryWishlistButton />
    </div>
  )
}

export default Logo
