const cities = [
  'Hair Salons in Bengaluru',
  'Hair Salons in Dubai', 
  'Hair Salons in London',
  'Hair Salons in Melbourne',
  'Hair Salons in Montréal',
  'Hair Salons in New York',
  'Hair Salons in Sydney',
  'Hair Salons in Toronto'
];

const CityFilters = ({ selectedCity, onCityChange }) => {
  return (
    <div className="bg-white py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {cities.map((city) => {
            const cityName = city.replace('Hair Salons in ', '');
            const isSelected = cityName === selectedCity;
            
            return (
              <button
                key={city}
                onClick={() => onCityChange(cityName)}
                className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                }`}
              >
                {city}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CityFilters;