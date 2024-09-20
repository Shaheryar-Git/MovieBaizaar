import React, { useState } from 'react';
import { Box, TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { CircularProgress } from '@mui/material';

const isMobile = window.innerWidth < 600;

const Searchbar = ({ setMovies, setIsSearching }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async () => {
    setIsLoading(true);
    const URL = `https://www.omdbapi.com/?s=${searchValue}&apikey=6db7e961`;
    const response = await fetch(URL);
    const result = await response.json();
    if (result.Search) {
      setMovies(result.Search);
      setIsSearching(true); // Set searching state to true
    } else {
      setIsSearching(false); // If no results, reset searching state
    }
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue === "") {
      alert("Search is Empty");
    } else {
      getMovies();
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, mt: 2 }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ alignItems: 'center' }}>
            <TextField
              variant="outlined"
              placeholder="Search Movies..."
              size="small"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              sx={{
                backgroundColor: 'white',
                borderRadius: 1,
                width: isMobile ? '250px' : '500px',
                mr: 2,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
              sx={{ height: '40px' }}
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={40} color="error" /> : 'Search'}
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default Searchbar;
