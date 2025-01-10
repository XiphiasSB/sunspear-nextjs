"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
    const pathname = usePathname()
    return (
        <nav className="ml-8">
        <ul className="flex space-x-4 uppercase text-sm font-thin">
            <li>
                <Link 
                    href="/"
                    className={pathname === '/' ? 'text-[#A28654]' : 'text-gray-300 hover:text-gray-500'}    
                >
                    Home
                </Link>
            </li>
            <li>
                <Link 
                    href="/immortals"
                    className={pathname === '/immortals' ? 'text-[#A28654]' : 'text-gray-300 hover:text-gray-500'}
                >
                Immortals
                </Link>
            </li>
            <li>
                <Link
                    href="/universe"
                    className={pathname === '/universe' ? 'text-[#A28654]' : 'text-gray-300 hover:text-gray-500'}
                    >
                Universe
                 </Link>
            </li>
            <li>
                <Link
                     href="/news"
                     className={pathname === '/news' ? 'text-[#A28654]' : 'text-gray-300 hover:text-gray-500'}
                     >
                 News
                 </Link>
            </li>
        </ul>
        </nav>
    )
}

export default Navigation
