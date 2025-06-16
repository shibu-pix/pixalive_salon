import { useState } from 'react';

const HeroSection = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    onSearch(searchInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Hair Salons near me
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Search for top hair salons near me
          </p>
          
          <div className="flex max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search for salons..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 border border-gray-300"
            />
            <button
              onClick={handleSearch}
              className="bg-gray-900 text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors font-medium"
            >
              Search near me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;