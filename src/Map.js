// src/Map.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { fetchData } from './api';

const MapComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    }
    getData();
  }, []);

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    shadowSize: [41, 41],
    iconAnchor: [12, 41],
    shadowAnchor: [4, 62],
    popupAnchor: [1, -34]
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <MapContainer center={[37.7749, -122.4194]} zoom={13} style={{ height: "80vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.filter(item => item.location && item.location.latitude && item.location.longitude).map((item, index) => (
        <Marker 
          key={index} 
          position={[
            parseFloat(item.location.latitude),
            parseFloat(item.location.longitude)
          ]}
        >
          <Popup>
            <div>
              <h2>{item.applicant}</h2>
              <p><strong>Location:</strong> {item.locationdescription}</p>
              <p><strong>Days/Hours:</strong> {item.dayshours}</p>
              <p><strong>Food Items:</strong> {item.fooditems}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
