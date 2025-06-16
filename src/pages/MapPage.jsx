// src/pages/MapPage.jsx
import { useState } from 'react';
import { MapPin } from 'lucide-react';

const markers = [
  {
    id: 1,
    name: 'Salon A',
    location: 'Indiranagar, Bangalore',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
    x: 30,
    y: 40,
  },
  {
    id: 2,
    name: 'Salon B',
    location: 'HSR Layout, Bangalore',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    x: 65,
    y: 70,
  },
];

export default function MapPage() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 bg-[#3d3d3d] text-white text-xl font-bold">
        Map View
      </div>

      <div className="flex-1 relative bg-gray-100">
        <div className="absolute inset-0 bg-gray-300" />

        {markers.map((marker) => (
          <div
            key={marker.id}
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
            onClick={() => setSelectedMarker(marker)}
          >
            <MapPin className="text-red-600 w-6 h-6" />
          </div>
        ))}

        {selectedMarker && (
          <div
            className="absolute bg-white p-4 rounded-xl shadow-xl w-72 transform -translate-x-1/2 -translate-y-full"
            style={{ left: `${selectedMarker.x}%`, top: `${selectedMarker.y}%` }}
          >
            <img
              src={selectedMarker.image}
              alt={selectedMarker.name}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold">{selectedMarker.name}</h3>
            <p className="text-sm text-gray-500">{selectedMarker.location}</p>
          </div>
        )}
      </div>
    </div>
  );
}
