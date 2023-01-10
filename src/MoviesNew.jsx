export function MoviesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateMovie(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Overview: <input name="overview" type="text" />
        </div>
        <div>
          Poster: <input name="poster_path" type="text" />
        </div>
        <button type="submit">Create movie</button>
      </form>
    </div>
  );
}
