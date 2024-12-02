import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CardItem = ({ product }) => (
  <Card sx={{ maxWidth: 345, margin: 'auto' }}>
    <CardMedia
      component="img"
      height="140"
      image={product.thumbnail}
      alt={product.title}
    />
    <CardContent>
      <Typography variant="h6">{product.title}</Typography>
      <Typography variant="body2" color="text.secondary">
        ${product.price} | Rating: {product.rating}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
    </CardContent>
  </Card>
);

export default CardItem;
