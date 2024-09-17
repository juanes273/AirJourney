import React from 'react';
import { List, ListItem, ListItemText, Button, Typography, Box } from '@mui/material';

const FlightList = ({ flights, onSelectFlight }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Vuelos Disponibles</Typography>
      <List>
        {flights.map((flight, index) => (
          <ListItem key={index} sx={{ mb: 2, border: '1px solid #ddd', borderRadius: '8px', p: 2 }}>
            <ListItemText
              primary={`${flight.airline} - ${flight.price}`}
              secondary={`Duración: ${flight.duration}, Escalas: ${flight.stops}`}
            />
            <Button 
              variant="outlined" 
              color="primary"
              onClick={() => onSelectFlight(flight)}
            >
              Seleccionar
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FlightList;
