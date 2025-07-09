import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Coordinates {
  lat: number;
  lon: number;
}
function FlyToActiveCity({
  activeCityCords,
}: {
  activeCityCords: Coordinates;
}) {
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

const MapBoxContent = ({
  activeCityCords,
}: {
  activeCityCords: Coordinates;
}) => {
  return (
    <MapContainer
      center={[activeCityCords.lat, activeCityCords.lon]}
      zoom={13}
      scrollWheelZoom={false}
      className="rounded-lg"
      style={{ height: "100%", width: "110%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <FlyToActiveCity activeCityCords={activeCityCords} />
    </MapContainer>
  );
};

export default MapBoxContent;
