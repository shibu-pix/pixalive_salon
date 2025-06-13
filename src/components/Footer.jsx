const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* Exact Pixalive logo from your image - inverted for dark background */}
              <div className="w-8 h-8 bg-white flex items-center justify-center relative">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  {/* Black circle (top left) */}
                  <circle cx="10" cy="10" r="6" fill="black"/>
                  {/* Black square (bottom left) */}
                  <rect x="4" y="18" width="12" height="10" fill="black"/>
                  {/* Black P shape (right side) */}
                  <path d="M18 4h8c2 0 4 2 4 4v8c0 2-2 4-4 4h-8V4z" fill="black"/>
                </svg>
              </div>
              <span className="font-semibold text-xl">Pixalive</span>
            </div>
            <p className="text-gray-300 mb-6">
              From bold ideas to real-world tech—<br />
              Pixalive is where innovation comes alive.
            </p>
            <p className="text-sm text-gray-400">
              © 2025 Pixaline Technology Services. All<br />
              rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>contact@pixalinetech.com</p>
              <p>+91 78738 84566</p>
              <p className="text-sm">
                📍 Pixaline Salon Network Private Limited<br />
                Electronic City, Bangalore
              </p>
            </div>
            
            <div className="flex space-x-4 mt-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Terms of Use</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer