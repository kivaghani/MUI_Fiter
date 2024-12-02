import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import CardItem from '../components/CardItem';
import { Grid, Box, Pagination } from '@mui/material';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('https://dummyjson.com/products');
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilter = ({ category, minPrice, maxPrice, rating }) => {
    const filtered = products.filter((product) =>
      (!category || product.category === category) &&
      product.price >= minPrice &&
      product.price <= maxPrice &&
      product.rating >= rating
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <Box sx={{ padding: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Sidebar onFilterChange={handleFilter} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {currentProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <CardItem product={product} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
            <Pagination
              count={Math.ceil(filteredProducts.length / productsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductPage;
