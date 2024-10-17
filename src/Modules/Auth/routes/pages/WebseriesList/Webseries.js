import React, { useState, useEffect } from "react";
import MoviesProps from "../../../../../Components/MoviesProps"; // Adjust the path as necessary
import Searchbar from "../../../../../Components/Searchbar"; // Adjust the path as necessary
import { CircularProgress, Box, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import PopularMovies from "../../../../../Components/PopularMovies"; // You can rename this to something more suitable for web series
import { useNavigate } from "react-router-dom";

const posterImages = [
  "https://image.tmdb.org/t/p/w500/mzgxjQFLYPk73bCYeGFWOAmKqV0.jpg",
  "https://image.tmdb.org/t/p/w500/gMMnf8VRg3Z98WaFmOLr9Jk8pIs.jpg",
  "https://image.tmdb.org/t/p/w500/rj3jBAZwPiOgkwAy1205MAgLahj.jpg",
  "https://image.tmdb.org/t/p/w500/7jEnft2CLNbILWAiBRIBrXNN7Qh.jpg",
  "https://image.tmdb.org/t/p/w500/nG2im8JKKNB6dXg9ZmVTuiYqFJI.jpg",
  "https://image.tmdb.org/t/p/w500/amtOltTVcK9vQtL1iQS6p3LBi05.jpg",
  "https://image.tmdb.org/t/p/w500/9daf0KXr3xUkMt2NCI0ZhDIZJEa.jpg",
  "https://image.tmdb.org/t/p/w500/pmB8uYJF1WKQCZnJjhnAx2IJjhk.jpg",
  "https://image.tmdb.org/t/p/w500/aYXF10EsIlgY7d24BWX0I7x2zfp.jpg",
  "https://image.tmdb.org/t/p/w500/h0y3OzHzG4yNvn8u3Za6ByH8lrQ.jpg",
  "https://image.tmdb.org/t/p/w500/Ajku4m7jbMpCTEPr794Imv19mCA.jpg",
  "https://image.tmdb.org/t/p/w500/hH4YaZuH89Hlyz0DEkf362Mj8gU.jpg",
  "https://image.tmdb.org/t/p/w500/dasgPx3OgkxHSQyncKlApfZkpi2.jpg",
  "https://image.tmdb.org/t/p/w500/lksigd4PnpvvIY9oPHW2DEnHh5H.jpg",
  "https://image.tmdb.org/t/p/w500/nlLKuyFz6lI0KyiY1V1AE2GwGX9.jpg",
  "https://image.tmdb.org/t/p/w500/acJDjIEdm66k2oKsr0xbOPvn0wH.jpg",
  "https://image.tmdb.org/t/p/w500/2o0cVL6fOa06aXd5xogZhD1h4ce.jpg"
];

const Webseries = () => {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([]);
  const [yourMoviesArray, setYourMoviesArray] = useState([]);
  const [isSearching, setIsSearching] = useState(false); // Track if searching

  // Function to fetch popular web series
  const getPopularWebseries = async () => {
    const URL = `https://api.themoviedb.org/3/tv/popular?api_key=905355346bd54a9d27a224972fb2b6cf`; // Fetching popular web series
    const response = await fetch(URL);
    const result = await response.json();
    console.log(result);
    
    if (result.results) {
      setYourMoviesArray(result.results);
    }
  };

  useEffect(() => {
    getPopularWebseries();
  }, []);

    const handleCardClick = (webseries) => {
      const movieName = encodeURIComponent(webseries.name); // Encode movie name for URL
      navigate(`/moviebookingform/?name=${movieName}`); // Navigate with search params
      console.log(movieName);
    }

  return (
    <>
      <Searchbar setMovies={setMovies} setIsSearching={setIsSearching} /> {/* Pass setIsSearching to Searchbar */}
      
      {/* Conditionally render MoviesProps or PopularMovies based on search state */}
      {isSearching ? (
        <MoviesProps movies={movies} />
      ) : (
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
            {yourMoviesArray.map((movie, index) => (
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
                    alt={movie.name} // Assuming movie.name is the series name
                    height="170"
                    image={posterImages[index % posterImages.length]} // Displaying the series poster
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.name}   
                    </Typography>
                    <Button onClick={()=>handleCardClick(movie)} variant="contained" color="primary">
                      Book Now {/* Book Now button */}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Webseries;
