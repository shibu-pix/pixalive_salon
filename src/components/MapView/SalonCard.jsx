import StarRating from './StarRating';

const SalonCard = ({ salon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
      <div className="h-48 bg-gray-200 overflow-hidden relative">
        <img
          src={salon.image}
          alt={salon.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full shadow-md">
          <span className="text-xs font-semibold text-gray-800">
            {salon.distance || '2.5 km'}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {salon.name}
          </h3>
          <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full ml-2">
            <span className="text-yellow-500 text-sm">★</span>
            <span className="text-sm font-semibold text-gray-800 ml-1">
              {salon.rating}
            </span>
          </div>
        </div>
        
        <div className="flex items-center mb-3">
          <StarRating rating={salon.rating} />
          <span className="ml-2 text-sm text-gray-600">
            ({salon.reviewCount.toLocaleString()} reviews)
          </span>
        </div>
        
        <div className="flex items-start mb-4">
          <svg className="w-4 h-4 text-gray-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-gray-600 leading-relaxed">
            {salon.address}
          </p>
        </div>

        {/* Opening Hours */}
        <div className="flex items-center mb-4 text-sm">
          <svg className="w-4 h-4 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span className="text-green-600 font-medium">Open now</span>
          <span className="text-gray-500 ml-2">• Closes 8:00 PM</span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(salon.amenities || ['WiFi', 'AC', 'Parking']).map((amenity, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              {amenity}
            </span>
          ))}
        </div>
        
        <div className="space-y-3 mb-4">
          <h4 className="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-2">
            Popular Services
          </h4>
          {salon.services.slice(0, 4).map((service, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {service.name}
                </p>
                <div className="flex items-center mt-1">
                  <svg className="w-3 h-3 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs text-gray-500">
                    {service.duration}
                  </p>
                </div>
              </div>
              <div className="text-right ml-3">
                <p className="text-sm font-bold text-gray-900">
                  ₹{service.price}
                </p>
                <p className="text-xs text-gray-500">onwards</p>
              </div>
            </div>
          ))}
        </div>
        
        {salon.services.length > 4 && (
          <button className="text-gray-700 text-sm hover:text-gray-900 font-medium mb-4 flex items-center">
            <span>See all {salon.services.length} services</span>
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm">
            Book Now
          </button>
          <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </button>
          <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalonCard;