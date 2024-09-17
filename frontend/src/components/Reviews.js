import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { user: 'Juan', rating: 4, comment: 'Buen servicio, pero el vuelo se retrasó.' },
    { user: 'María', rating: 5, comment: 'Excelente experiencia.' }
  ]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Reseñas y Valoraciones</Typography>
      <List>
        {reviews.map((review, index) => (
          <ListItem key={index} sx={{ mb: 2, border: '1px solid #ddd', borderRadius: '8px', p: 2 }}>
            <ListItemText
              primary={`${review.user} - ${review.rating} estrellas`}
              secondary={review.comment}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Reviews;
