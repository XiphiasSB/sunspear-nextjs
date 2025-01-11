'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation' // Used to detect the current path
import Link from 'next/link'

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname() // Detect the current path

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Immortals', href: '/immortals' },
    { name: 'Universe', href: '/universe' },
    { name: 'News', href: '/news' },
  ]

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="lg:hidden p-2 focus:outline-none"
        onClick={() => setMenuOpen(true)}
        aria-label="Open Menu"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 bg-gray-900 bg-opacity-90 z-50 flex flex-col p-4 rounded-br-lg"
          style={{ width: '180px', height: '300px' }}
        >
          {/* Close Button */}
          <button
            className="self-end text-white text-3xl focus:outline-none mb-4"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            &times;
          </button>

          <div className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-lg uppercase ${
                  pathname === item.href
                    ? 'text-[#A28654] font-semibold' // Gold color for active page
                    : 'text-gray-400 hover:text-white'
                } transition-colors duration-300`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-4 uppercase">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-lg ${
                  pathname === item.href
                    ? 'text-[#A28654] font-semibold' // Gold color for active page
                    : 'text-gray-400 hover:text-white'
                } transition-colors duration-300`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navigation
