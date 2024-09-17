import React from 'react';

const FlightList = ({ flights, onSelectFlight }) => {
  return (
    <div>
      <h2>Vuelos Disponibles</h2>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            <div>
              <p><strong>{flight.airline}</strong> - {flight.price}</p>
              <p>Duración: {flight.duration}, Escalas: {flight.stops}</p>
              <button onClick={() => onSelectFlight(flight)}>Seleccionar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;