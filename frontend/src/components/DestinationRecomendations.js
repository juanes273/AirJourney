import React, { useEffect, useState } from 'react';
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material';

const DestinationRecommendations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Simulamos la obtención de la ubicación actual del usuario
    navigator.geolocation.getCurrentPosition((position) => {
      setDestinations([
        { city: 'Ciudad 1', distance: '200km', highlights: 'Playas' },
        { city: 'Ciudad 2', distance: '300km', highlights: 'Montañas' }
      ]);
    });
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Recomendaciones de Destinos</Typography>
      <List>
        {destinations.map((dest, index) => (
          <ListItem key={index} sx={{ mb: 2, border: '1px solid #ddd', borderRadius: '8px', p: 2 }}>
            <ListItemText
              primary={`${dest.city} - ${dest.distance}`}
              secondary={`Destacado: ${dest.highlights}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DestinationRecommendations;
