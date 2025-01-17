'use client'

import React from 'react'

interface ScrollDownBtnProps {
  targetId: string
  className?: string
}

const ScrollDownBtn: React.FC<ScrollDownBtnProps> = ({ targetId, className }) => {
  const scrollToTarget = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <button
      onClick={scrollToTarget}
      className={`cursor-pointer border-none bg-transparent p-0 ${className || ''}`}
      aria-label="Scroll Button"
    >
      <svg
        viewBox="0 0 34 32"
        className="w-8 h-8 fill-current text-gray-300 hover:text-white"
      >
        <path d="M21.239 27.752l12.743-12.743-4.248-4.248-12.743 12.743-12.743-12.743-4.248 4.248 16.991 16.991z" />
        <path d="M21.522 4.531c0-2.549-1.982-4.531-4.531-4.531s-4.531 1.982-4.531 4.531c0 1.133 0.566 2.266 1.416 3.115s1.982 1.416 3.115 1.416c2.549 0 4.531-1.982 4.531-4.531z" />
      </svg>
    </button>
  )
}

export default ScrollDownBtn
