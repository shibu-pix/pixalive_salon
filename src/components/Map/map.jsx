import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Map from "../../assets/Map/map1.png"; // Your custom black icon (32x32 suggested)
import blackMarkerIcon from '../../assets/Map/elements.png';

// 🔧 Custom black marker icon using your local asset
const blackIcon = new L.Icon({
  iconUrl: blackMarkerIcon,
  iconSize: [32, 32], // adjust size as needed
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const venues = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Hair Studio ${i + 1}`,
  rating: (Math.random() * 2 + 3).toFixed(1),
  location: {
    lat: 12.9 + Math.random() * 0.2,
    lng: 77.5 + Math.random() * 0.2,
  },
  address: `Area ${i + 1}, Bengaluru`,
}));

const HairStudioMapLeaflet = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[400px] overflow-y-scroll bg-white p-4 border-r">
        <h2 className="text-xl font-bold mb-4">
          {venues.length} Venues with map area
        </h2>
        {venues.map((place) => (
          <div
            key={place.id}
            className="mb-6 border rounded-lg p-4 shadow-sm hover:shadow-md"
          >
            <img
              src={Map}
              alt="Salon"
              className="rounded-lg mb-3"
            />
            <h3 className="font-semibold text-lg flex items-center gap-2">
              {place.name}
              <span className="flex items-center text-black">
                <FaStar className="ml-1" /> {place.rating}
              </span>
            </h3>
            <p className="text-gray-500 flex items-center text-sm mt-1">
              <FaMapMarkerAlt className="mr-1" /> {place.address}
            </p>
            <ul className="mt-3 text-sm">
              <li className="flex justify-between">
                Ladies Colour <span>₹299</span>
              </li>
              <li className="flex justify-between">
                Injection <span>₹599</span>
              </li>
              <li className="flex justify-between">
                Brow Lift <span>₹399</span>
              </li>
              <li className="text-blue-600 cursor-pointer">See all services</li>
            </ul>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="flex-1 z-0">
        <MapContainer
          center={[12.9716, 77.5946]}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {venues.map((place) => (
            <Marker
              key={place.id}
              position={[place.location.lat, place.location.lng]}
              icon={blackIcon}
            >
              <Popup>
                <strong>{place.name}</strong>
                <br />
                {place.address}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default HairStudioMapLeaflet;
