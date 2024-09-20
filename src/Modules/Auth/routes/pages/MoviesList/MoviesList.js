import React, { useState, useEffect } from "react";
import MoviesProps from "../../../../../Components/MoviesProps";
import Searchbar from "../../../../../Components/Searchbar";
import { CircularProgress, Box } from "@mui/material";
import PopularMovies from "../../../../../Components/PopularMovies";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [yourMoviesArray, setYourMoviesArray] = useState([]);
  const [isSearching, setIsSearching] = useState(false); // Track if searching


  const getPopularMovies = async () => {
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=905355346bd54a9d27a224972fb2b6cf`;
    const response = await fetch(URL);
    const result = await response.json();
    if (result.results) {
      setYourMoviesArray(result.results);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);



  return (
    <>
      <Searchbar setMovies={setMovies} setIsSearching={setIsSearching} /> {/* Pass setIsSearching to Searchbar */}
      
      {/* Conditionally render MoviesProps or PopularMovies based on search state */}
      {isSearching ? (
        <MoviesProps movies={movies} />
      ) : (
        <PopularMovies movies={yourMoviesArray} />
      )}
    </>
  );
};

export default MoviesList;
