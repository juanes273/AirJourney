import React, { useEffect, useState } from 'react';

const DestinationRecommendations = () => {
  const [location, setLocation] = useState(null);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Simulamos la obtención de la ubicación actual del usuario
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({ lat: position.coords.latitude, lon: position.coords.longitude });
      // Obtener destinos recomendados basados en la ubicación
      setDestinations([
        { city: 'Ciudad 1', distance: '200km', highlights: 'Playas' },
        { city: 'Ciudad 2', distance: '300km', highlights: 'Montañas' }
      ]);
    });
  }, []);

  return (
    <div>
      <h2>Recomendaciones de Destinos</h2>
      {destinations.length > 0 ? (
        <ul>
          {destinations.map((dest, index) => (
            <li key={index}>
              <p><strong>{dest.city}</strong> - {dest.distance}</p>
              <p>Destacado: {dest.highlights}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando recomendaciones...</p>
      )}
    </div>
  );
};

export default DestinationRecommendations;