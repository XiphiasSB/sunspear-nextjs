import Navigation from './Navigation/Navigation'
import SocialIcons from '../SocialIcons/SocialIcons'
import WishlistButton from './WishlistButton/WishlistButton'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-3 text-white z-20 border-b border-gray-600" 
    style={{ backgroundColor: 'rgba(6, 14, 16, 0.9)' }} >
      <Navigation />
      <SocialIcons />
      <WishlistButton />
    </header>
  )
}

export default Header
