// components/SalonMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const SalonMap = ({ salons }) => {
  return (
    <MapContainer center={[12.9716, 77.5946]} zoom={12} className="h-[600px] w-full rounded-lg z-0">
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {salons.map((salon, idx) => (
        <Marker key={idx} position={salon.location}>
          <Popup>{salon.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default SalonMap;
