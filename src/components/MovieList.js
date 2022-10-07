import React from "react";

function MovieList(props) {
  const FavouriteMovies = props.favouriteComponent;
  return (
    <MovieItems>
      {props.movies?.map((movie, index) => {
        return (
          <MovieHolder key={index}>
            <MovieCards>
              <img src={movie.Poster} alt={movie.Title} />
              <Overlay onClick={() => props.handleClick(movie)}>
                <FavouriteMovies />
              </Overlay>
            </MovieCards>
          </MovieHolder>
        );
      })}
    </MovieItems>
  );
}

export default MovieList;
