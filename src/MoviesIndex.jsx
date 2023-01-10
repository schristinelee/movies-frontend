import Imgix from "react-imgix";

export function MoviesIndex(props) {
  return (
    <div>
      <h1>Trending Movies This Week!</h1>
      {props.movies.map((movie) => (
        <div key={movie.id}>
          <button onClick={() => props.onShowMovie(movie)}>
            <Imgix src={"https://image.tmdb.org/t/p/original" + movie.poster_path} width={200} height={350}></Imgix>
          </button>
          <div className="overlay d-flex align-items-center justify-content-center"></div>
        </div>
      ))}
    </div>
  );
}
