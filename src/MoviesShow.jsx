import Imgix from "react-imgix";

export function MoviesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateMovie(props.movie.id, params, () => event.target.reset());
  };

  return (
    <div>
      <Imgix src={"https://image.tmdb.org/t/p/original" + props.movie.backdrop_path} width={300} height={400}></Imgix>
      <h1>{props.movie.title}</h1>
      <p>{props.movie.overview}</p>
      <p>Release date: {props.movie.release_date}</p>
      <button>Add to Favorites</button>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}
