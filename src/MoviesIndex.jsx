import Imgix from "react-imgix";
import React from "react";

export function MoviesIndex(props) {
  return (
    <div>
      <h1>Trending Now</h1>
      {props.movies.map((movie, index) => (
        <div key={movie.id}>
          <div className="image-container d-flex justify-content-start m-3">
            <div className="row">
              <button onClick={() => props.onShowMovie(movie)}>
                <Imgix src={"https://image.tmdb.org/t/p/original" + movie.poster_path} width={180} height={250}></Imgix>
              </button>
            </div>
          </div>
        </div>
      ))}
      <h1>Now Playing</h1>
      {props.movies.map((movie, index) => (
        <div key={movie.id}>
          <div className="image-container d-flex justify-content-start m-3">
            <div className="row">
              <button onClick={() => props.onShowMovie(movie)}>
                <Imgix src={"https://image.tmdb.org/t/p/original" + movie.poster_path} width={180} height={250}></Imgix>
              </button>
            </div>
          </div>
        </div>
      ))}
      <h1>Top rated</h1>
      {props.movies.map((movie, index) => (
        <div key={movie.id}>
          <div className="image-container d-flex justify-content-start m-3">
            <div className="row">
              <button onClick={() => props.onShowMovie(movie)}>
                <Imgix src={"https://image.tmdb.org/t/p/original" + movie.poster_path} width={180} height={250}></Imgix>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
