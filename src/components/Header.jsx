import { Menu, User, MapPin, Clock, Phone } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            {/* Exact Pixalive logo from your image */}
            <div className="w-8 h-8 bg-black flex items-center justify-center relative">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                {/* White circle (top left) */}
                <circle cx="10" cy="10" r="6" fill="white"/>
                {/* White square (bottom left) */}
                <rect x="4" y="18" width="12" height="10" fill="white"/>
                {/* White P shape (right side) */}
                <path d="M18 4h8c2 0 4 2 4 4v8c0 2-2 4-4 4h-8V4z" fill="white"/>
              </svg>
            </div>
            <span className="font-semibold text-xl text-gray-900">Pixalive</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm text-gray-600">
            <span>All Treatments and venue</span>
            <span>Current location</span>
            <span>Any date</span>
            <span>Any time</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 md:hidden">
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header