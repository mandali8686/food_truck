// src/App.js
import React from 'react';
import 'leaflet/dist/leaflet.css';
import MapComponent from './Map';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Food Truck Map
      </header>
      <p className="App-instructions">
        Click on pin point to check food trucks
      </p>
      <MapComponent />
    </div>
  );
};

export default App;
