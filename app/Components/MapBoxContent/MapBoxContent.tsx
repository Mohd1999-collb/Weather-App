import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


interface Coordinates {
  lat: number;
  lon: number;
}

function FlyToActiveCity({ activeCityCords }: { activeCityCords: Coordinates }) {
  const map = useMap();

  useEffect(() => {
    if (activeCityCords) {
      map.flyTo([activeCityCords.lat, activeCityCords.lon], 13, {
        animate: true,
        duration: 1.5,
      });
    }
  }, [activeCityCords, map]);

  return null;
}

const MapBoxContent = ({ activeCityCords, city}: { activeCityCords: Coordinates; city : string }) => {


  const customMarker = new L.Icon({
  iconUrl: "/location.png",
  iconSize: [50, 50],
  iconAnchor: [activeCityCords.lat, activeCityCords.lon],
  popupAnchor: [0, -50],
  
});

  return (
    <MapContainer
      center={[activeCityCords.lat, activeCityCords.lon]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[23.3rem] 2xl:h-[32rem] rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
        position={[activeCityCords.lat, activeCityCords.lon]}
        icon={customMarker}
      >
      <Popup className="font-bold text-[15px]">
        📍 {city}
      </Popup>
      </Marker>

      <FlyToActiveCity activeCityCords={activeCityCords} />
    </MapContainer>
  );
};

export default MapBoxContent;
