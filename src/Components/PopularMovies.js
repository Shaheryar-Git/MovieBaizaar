import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const movieImages = [
    "https://image.tmdb.org/t/p/w500/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg",
    "https://image.tmdb.org/t/p/w500/mKOBdgaEFguADkJhfFslY7TYxIh.jpg",
    "https://image.tmdb.org/t/p/w500/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
    "https://image.tmdb.org/t/p/w500/cyKH7pDFlxIXluqRyNoHHEpxSDX.jpg",
    "https://image.tmdb.org/t/p/w500/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
    "https://image.tmdb.org/t/p/w500/Asg2UUwipAdE87MxtJy7SQo08XI.jpg",
    "https://image.tmdb.org/t/p/w500/cgKZtNSETjXJPkAQ4rasV7dnyQH.jpg",
    "https://image.tmdb.org/t/p/w500/rwakNepsh0dXVcTtWKUVbDsSYYZ.jpg",
    "https://image.tmdb.org/t/p/w500/7aPrv2HFssWcOtpig5G3HEVk3uS.jpg",
    "https://image.tmdb.org/t/p/w500/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
    "https://image.tmdb.org/t/p/w500/9BQqngPfwpeAfK7c2H3cwIFWIVR.jpg",
    "https://image.tmdb.org/t/p/w500/sIzZQdXY21sEks9lGkGuXzqdGSA.jpg",
    "https://image.tmdb.org/t/p/w500/hdFIdXwS8FSN2wIsuotjW1mshI0.jpg",
    "https://image.tmdb.org/t/p/w500/bM4gNeDemQnY3TujjMe1usjt4iZ.jpg",
    "https://image.tmdb.org/t/p/w500/9juRmk8QjcsUcbrevVu5t8VZy5G.jpg",
    "https://image.tmdb.org/t/p/w500/1wP1phHo2CROOqzv7Azs0MT5esU.jpg",
    "https://image.tmdb.org/t/p/w500/2RVcJbWFmICRDsVxRI8F5xRmRsK.jpg",
    "https://image.tmdb.org/t/p/w500/yNU8UF3DOmv3G9gVNAj34beclTG.jpg",
    "https://image.tmdb.org/t/p/w500/tCQfubckzzcuCbsGugkpLhfjS5z.jpg",
];

const PopularMovies = ({ movies = [] }) => {  
    const navigate = useNavigate();

    const handleCardClick = (movie) => {
      const movieName = encodeURIComponent(movie.title); // Encode movie name for URL
      navigate(`/moviebookingform/?name=${movieName}`); // Navigate with search params
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
        {movies.length > 0 ? (
          movies.map((movie, index) => (
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
                  height="170"
                  image={movieImages[index % movieImages.length]} // Displaying the movie poster
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {movie.title}   
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginY: 1 }}>
                    {movie.description} {/* Display the movie description */}
                  </Typography>
                  <Button  onClick={() => handleCardClick(movie)} variant="contained" color="primary">
                    Book Now {/* Book Now button */}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" align="center">
            No movies available
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default PopularMovies;
