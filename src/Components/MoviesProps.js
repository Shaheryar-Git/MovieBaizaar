import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MoviesProps = (props) => {
  const navigate = useNavigate();

  const handleCardClick = (movie) => {
    const movieName = encodeURIComponent(movie.Title); // Encode movie name for URL
    navigate(`moviebookingform?name=${movieName}`); // Navigate with search params
    console.log(handleCardClick);
    
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2, 
        margin: 'auto',
        ml: { xs: 0, md: '20px' }, // Adjust margin-left for small screens
        display: 'flex',
        justifyContent: 'center', // Center horizontally
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {props.movies.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ 
                  maxWidth: 345, 
                  margin: 'auto', 
                  transition: 'transform 0.3s, box-shadow 0.3s', 
                  '&:hover': { 
                    transform: 'scale(1.05)', 
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' 
                  } 
                }}>
              <CardMedia
                component="img"
                alt={movie.title} // Assuming movie.Title is the movie name
                height="170"
                image={movie.Poster} // Displaying the movie poster
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  {movie.Title}   
                  </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginY: 1 }}>
                  {movie.description} {/* Display the movie description */}
                </Typography>
                <Button onClick={() => handleCardClick(movie)} variant="contained" color="primary">
                  Book Now {/* Book Now button */}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MoviesProps;
