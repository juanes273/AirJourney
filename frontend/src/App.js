import React, { useState } from 'react';
import FlightSearch from './components/FlightSearch';
import FlightList from './components/FlightList';
import FlightDetails from './components/FlightDetails';
import DestinationRecommendations from './components/DestinationRecomendations';
import Reviews from './components/Reviews';
import TestComponent from './components/TestComponent';

function App() {
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleSearch = (searchParams) => {
    // Simulación de resultados de vuelos
    const mockFlights = [
      { airline: 'Airline 1', price: '$300', duration: '3h', stops: 'Directo' },
      { airline: 'Airline 2', price: '$400', duration: '4h', stops: '1 Escala' }
    ];
    setFlights(mockFlights);
  };

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
  };

  return (
    <div className="App">
      <h1>Aplicación de Búsqueda de Vuelos</h1>
      <TestComponent/>
      {/* Pantalla de Búsqueda y Selección de Vuelos */}
      <FlightSearch onSearch={handleSearch} />
      <FlightList flights={flights} onSelectFlight={handleSelectFlight} />
      <FlightDetails selectedFlight={selectedFlight} />
      
      <hr />

      {/* Pantalla de Recomendaciones y Reseñas */}
      <DestinationRecommendations/>
      <Reviews />
    </div>
  );
}

export default App;
