import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const FlightDetails = ({ selectedFlight }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Detalles del Vuelo</Typography>
      {selectedFlight ? (
        <Paper sx={{ p: 2 }}>
          <Typography variant="body1"><strong>Aerolínea:</strong> {selectedFlight.airline}</Typography>
          <Typography variant="body1"><strong>Precio:</strong> {selectedFlight.price}</Typography>
          <Typography variant="body1"><strong>Duración:</strong> {selectedFlight.duration}</Typography>
          <Typography variant="body1"><strong>Escalas:</strong> {selectedFlight.stops}</Typography>
        </Paper>
      ) : (
        <Typography>No se ha seleccionado ningún vuelo.</Typography>
      )}
    </Box>
  );
};

export default FlightDetails;
