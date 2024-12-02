import React, { useState } from 'react';
import { Box, Typography, Slider, Button, Rating, Select, MenuItem } from '@mui/material';

const Filters = ({ onApplyFilters }) => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [rating, setRating] = useState(0);

  const handleApplyFilters = () => {
    onApplyFilters({
      category,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      rating,
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Category
      </Typography>
      <Select
        fullWidth
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        displayEmpty
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="smartphones">Smartphones</MenuItem>
        <MenuItem value="laptops">Laptops</MenuItem>
        <MenuItem value="fragrances">Fragrances</MenuItem>
        <MenuItem value="skincare">Skincare</MenuItem>
        <MenuItem value="groceries">Groceries</MenuItem>
        <MenuItem value="beauty">Beauty</MenuItem>
      </Select>

      <Typography variant="h6" gutterBottom mt={3}>
        Price Range
      </Typography>
      <Slider
        value={priceRange}
        onChange={(e, newValue) => setPriceRange(newValue)}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
      />

      <Typography variant="h6" gutterBottom mt={3}>
        Minimum Rating
      </Typography>
      <Rating
        value={rating}
        onChange={(e, newValue) => setRating(newValue)}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleApplyFilters}
        sx={{ marginTop: 3 }}
      >
        Apply Filters
      </Button>
    </Box>
  );
};

export default Filters;
