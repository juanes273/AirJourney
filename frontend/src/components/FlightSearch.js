import React, { useState } from 'react';

const FlightSearch = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ origin, destination, startDate, endDate });
  };

  return (
    <div>
      <h2>Buscar Vuelos</h2>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Ciudad de Origen" 
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Ciudad de Destino" 
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input 
          type="date" 
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input 
          type="date" 
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default FlightSearch;
