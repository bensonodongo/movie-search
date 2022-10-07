import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import axios from "axios";
import MoviesList from "./MovieList";
import MovieTitle from "./MovieTitle";
import Toggle from "./Toggle"
import Search from "./Search";
import Favorites from "./Favorites";
import Remove from "./Remove"
import { SearchWrapper } from "./MoviesList.styled";

function MovieApi() {
    const [movies, setMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState("");
    const [favoriteMovies, setFavorite] = useState([]);

    useEffect(() => {
        const getMoviesList = (searchMovies) => {
          const apiKey = "b0312ded ";
          axios({
            method: "get",
            url: `https://www.omdbapi.com/?s=${searchMovies}&apikey=${apiKey}&`,
          }).then((res) => {
            const data = res.data.Search;
           
            if (data) {
              setMovies(data);
            }
          });
          
        };
        getMoviesList(searchMovies);


    const handleRemove = (movie) =>{
      const removeMovies = favouriteMovies.filter(removeItem=>removeItem.imdbID !== movie.imdbID)
      setFavorite(removeMovies)
      console.log(removeMovies)
    }
    return (
      <Container>
        <Navbar>
          <MovieTitle heading="Movies" />
          <Toggle />
        </Navbar>
        <SearchWrapper>
          <Search search={searchMovies} handleChange={handleChange} />
        </SearchWrapper>
  
       
        <MoviesListWrapper>
          <MoviesList
          search={searchMovies}
            movies={movies}
            favoriteComponent={AddFavorites}
            handleClick={handleClick}
          />
          
        </MoviesListWrapper>
  
        <FavouritesCont>
          <MovieTitle heading="Add Favourite Movies" />
        </FavouritesCont>
        <MoviesListWrapper>
          <MoviesList
            movies={favouriteMovies}
             favouriteComponent={Remove}
             handleClick={handleRemove}
          />
        </MoviesListWrapper>
      </Container>
    );
  }
  
  export default MovieApp;
  
  export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `
  export const FavouritesCont = styled.div``
  export const MoviesListWrapper= styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  `
  export const Container = styled.div`
  padding: 0 40px;