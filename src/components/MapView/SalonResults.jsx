import SalonCard from './SalonCard';
import { salonsData } from '../data/salonsData';

const SalonResults = ({ searchQuery, selectedCity }) => {
  const filteredSalons = salonsData.filter(salon => {
    const matchesCity = salon.city === selectedCity;
    const matchesSearch = searchQuery ? 
      salon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      salon.services.some(service => 
        service.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) : true;
    return matchesCity && matchesSearch;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Choose from <span className="font-semibold text-gray-900">{filteredSalons.length}</span> Hair Salons near you{' '}
          <button className="text-gray-700 hover:text-gray-900 font-medium hover:underline">
            See map near me
          </button>
        </p>
        <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">
          <span>⚙️</span>
          <span className="font-medium text-gray-700">Filters</span>
        </button>
      </div>

      {filteredSalons.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredSalons.map((salon) => (
            <SalonCard key={salon.id} salon={salon} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🏪</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No salons found</h3>
          <p className="text-gray-500">
            {searchQuery 
              ? `No salons match "${searchQuery}" in ${selectedCity}`
              : `No salons available in ${selectedCity} yet`
            }
          </p>
          <p className="text-sm text-gray-400 mt-2">Try selecting a different city or search term</p>
        </div>
      )}
    </div>
  );
};

export default SalonResults;