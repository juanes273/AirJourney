import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

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
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Buscar Vuelos</Typography>
      <form onSubmit={handleSearch}>
        <TextField 
          label="Ciudad de Origen" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <TextField 
          label="Ciudad de Destino" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <TextField 
          label="Fecha de Salida" 
          type="date" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <TextField 
          label="Fecha de Regreso" 
          type="date" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2 }}
        >
          Buscar
        </Button>
      </form>
    </Box>
  );
};

export default FlightSearch;

