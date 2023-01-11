import Imgix from "react-imgix";

export function MoviesShow(props) {
  const handleClick = () => {
    props.onFavoriteNew(props.movie);
  };

  return (
    <div>
      <Imgix src={"https://image.tmdb.org/t/p/original" + props.movie.backdrop_path} width={300} height={400}></Imgix>
      <h1>{props.movie.title}</h1>
      <p>{props.movie.overview}</p>
      <p>Release date: {props.movie.release_date}</p>
      <button onClick={handleClick}>Add to Favorites</button>
    </div>
  );
}
