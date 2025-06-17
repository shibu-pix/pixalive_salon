import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { salonsData, cityCoordinates } from '../data/salonsData';
import SalonCard from './SalonCard';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapView = ({ selectedCity }) => {
  const [selectedSalon, setSelectedSalon] = useState(null);
  const [mapKey, setMapKey] = useState(0);
  
  // Get city coordinates or default to Bengaluru
  const cityData = cityCoordinates[selectedCity] || cityCoordinates['Bengaluru'];
  const mapCenter = [cityData.lat, cityData.lng];
  const mapZoom = cityData.zoom;
  
  // Filter salons by selected city
  const filteredSalons = salonsData.filter(salon => 
    salon.city === selectedCity
  );

  // Force map re-render when city changes
  useEffect(() => {
    setMapKey(prev => prev + 1);
    setSelectedSalon(null);
  }, [selectedCity]);

  const handleMarkerClick = (salon) => {
    setSelectedSalon(salon);
  };

  return (
    <div className="flex gap-6 h-96">
      <div className="w-1/3 overflow-y-auto">
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-3">
            <span className="font-semibold text-gray-900">{filteredSalons.length}</span> venues within map area
          </p>
          <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm hover:bg-gray-50 transition-colors">
            <span>⚙️</span>
            <span className="font-medium text-gray-700">Filters</span>
          </button>
        </div>
        
        {selectedSalon ? (
          <div>
            <button 
              onClick={() => setSelectedSalon(null)}
              className="text-gray-700 text-sm mb-4 hover:text-gray-900 font-medium flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back to all salons
            </button>
            <SalonCard salon={selectedSalon} />
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSalons.length > 0 ? (
              filteredSalons.map((salon) => (
                <div
                  key={salon.id}
                  onClick={() => handleMarkerClick(salon)}
                  className="cursor-pointer"
                >
                  <SalonCard salon={salon} />
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <div className="text-gray-400 text-4xl mb-3">🏪</div>
                <p className="text-gray-500 font-medium">No salons found in {selectedCity}</p>
                <p className="text-sm text-gray-400 mt-2">Try selecting a different city</p>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="w-2/3">
        <MapContainer
          key={mapKey}
          center={mapCenter}
          zoom={mapZoom}
          style={{ height: '100%', width: '100%' }}
          className="rounded-lg border border-gray-300"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {filteredSalons.map((salon) => (
            <Marker
              key={salon.id}
              position={[salon.coordinates.lat, salon.coordinates.lng]}
              eventHandlers={{
                click: () => handleMarkerClick(salon),
              }}
            >
              <Popup>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">{salon.name}</h3>
                  <p className="text-sm text-gray-600">{salon.address}</p>
                  <div className="flex items-center justify-center mt-2">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm font-medium">{salon.rating}</span>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;