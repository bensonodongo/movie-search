import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import MoviesList from "./MovieList";
import Title from "./MovieTitle";
import Search from "./Search";
import Favorites from "./Favorites";

function MovieApi() {
    const [movies, setMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState("");
    const [favouriteMovies, setFavourite] = useState([]);

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