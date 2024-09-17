import React from 'react';

const FlightDetails = ({ selectedFlight }) => {
  return (
    <div>
      <h2>Detalles del Vuelo</h2>
      {selectedFlight ? (
        <div>
          <p><strong>Aerolínea:</strong> {selectedFlight.airline}</p>
          <p><strong>Precio:</strong> {selectedFlight.price}</p>
          <p><strong>Duración:</strong> {selectedFlight.duration}</p>
          <p><strong>Escalas:</strong> {selectedFlight.stops}</p>
        </div>
      ) : (
        <p>No se ha seleccionado ningún vuelo.</p>
      )}
    </div>
  );
};

export default FlightDetails;