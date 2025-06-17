import { useState } from 'react';
import Header from '../components/MapView/Header';
import HeroSection from '../components/MapView/HeroSection';
import CityFilters from '../components/MapView/CityFilters';
import SalonResults from '../components/MapView/SalonResults';
import MapView from '../components/MapView/MapView';

function ExploreSalons() {
  const [activeView, setActiveView] = useState('list');
  const [selectedCity, setSelectedCity] = useState('Bengaluru');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection onSearch={handleSearch} />
      <CityFilters selectedCity={selectedCity} onCityChange={setSelectedCity} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Best Global Hair Salons</h2>
          <div className="flex bg-white rounded-lg border border-gray-300 shadow-sm">
            <button
              onClick={() => setActiveView('list')}
              className={`px-6 py-3 rounded-l-lg font-medium transition-colors ${
                activeView === 'list' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setActiveView('map')}
              className={`px-6 py-3 rounded-r-lg font-medium transition-colors ${
                activeView === 'map' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Map View
            </button>
          </div>
        </div>

        {activeView === 'list' ? (
          <SalonResults searchQuery={searchQuery} selectedCity={selectedCity} />
        ) : (
          <MapView selectedCity={selectedCity} />
        )}
      </div>
    </div>
  );
}

export default ExploreSalons;
