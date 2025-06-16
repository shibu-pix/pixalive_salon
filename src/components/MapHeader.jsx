const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-gray-900">
              Hair Salon Finder
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Find Salons</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Services</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">About</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Sign In
            </button>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MapHeader;