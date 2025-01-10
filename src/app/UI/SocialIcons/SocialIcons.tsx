import React from 'react'

const socials = [
    { name: 'x', href: 'https://x.com/GatesofPyre', icon: '/socials/x.svg' },
    { name: 'Facebook', href: 'https://www.facebook.com/sunspeargames', icon: '/socials/facebook.svg' },
    { name: 'YouTube', href: 'https://www.youtube.com/c/PlayIMMORTAL', icon: '/socials/youtube.svg' },
    { name: 'Instagram', href: 'https://www.instagram.com/gatesofpyre', icon: '/socials/instagram.svg' },
    { name: 'Discord', href: 'https://discord.com/invite/nRnVdRBRZP', icon: '/socials/discord.svg' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@gatesofpyre', icon: '/socials/tiktok.svg' },
  ]
  
  const SocialIcons = () => {
    return (
      <div className="flex space-x-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-150"
            aria-label={social.name}
          >
            <img src={social.icon} alt={social.name} className="w-6 h-6" />
          </a>
        ))}
      </div>
    )
  }
  
  export default SocialIcons
  