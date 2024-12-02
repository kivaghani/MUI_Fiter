import React from 'react';
import { Box } from '@mui/material';
import Filters from './Filters';

const Sidebar = ({ onFilterChange }) => (
  <Box sx={{ width: '100%', marginBottom: '20px' }}>
    <Filters onApplyFilters={onFilterChange} />
  </Box>
);

export default Sidebar;
