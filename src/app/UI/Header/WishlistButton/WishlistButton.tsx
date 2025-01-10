import React from 'react'

const WishlistButton = () => {
  return (
    <a
      href="https://store.steampowered.com/app/2921580/IMMORTAL_Gates_of_Pyre/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 border border-gray-400 px-4 py-2 rounded-md text-gray-300 hover:scale-110 transform transition-transform duration-300"
    >
      <img src="/socials/steam.svg" alt="Steam" className="w-6 h-6" />
      <span className="uppercase text-sm tracking-wide">Wishlist on Steam</span>
    </a>
  )
}

export default WishlistButton
