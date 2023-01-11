import axios from "axios";
import { useState, useEffect } from "react";
import { MoviesIndex } from "./MoviesIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { MoviesNew } from "./MoviesNew";
import { MoviesShow } from "./MoviesShow";
import { Modal } from "./Modal";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});

  const handleIndexMovies = () => {
    console.log("handleIndexMovies");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };

  const handleShowMovie = (movie) => {
    console.log("handleShowMovie", movie);
    setIsMoviesShowVisible(true);
    setCurrentMovie(movie);
  };

  const handleUpdateMovie = (id, params, successCallback) => {
    console.log("handleUpdateMovie", params);
    axios.patch("http://localhost:3000/movies/${id}.json", params).then((response) => {
      setMovies(
        movies.map((movie) => {
          if (movie.id === response.data.id) {
            return response.data;
          } else {
            return movie;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsMoviesShowVisible(false);
  };

  const handleNewFavorite = (params) => {
    axios.post("http://localhost:3000/favorites.json", params).then((response) => {
      console.log(response, "Creating a favorite!");
      window.location.href = "/";
    });
  };

  useEffect(handleIndexMovies, handleNewFavorite, []);

  return (
    <div>
      <MoviesIndex movies={movies} onShowMovie={handleShowMovie} />
      <Modal show={isMoviesShowVisible} onClose={handleClose}>
        <MoviesShow movie={currentMovie} onUpdateMovie={handleUpdateMovie} onFavoriteNew={handleNewFavorite} />
      </Modal>
    </div>
  );
}
