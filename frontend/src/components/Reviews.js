import React, { useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { user: 'Juan', rating: 4, comment: 'Buen servicio, pero el vuelo se retrasó.' },
    { user: 'María', rating: 5, comment: 'Excelente experiencia.' }
  ]);

  return (
    <div>
      <h2>Reseñas y Valoraciones</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p><strong>{review.user}</strong> - {review.rating} estrellas</p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;