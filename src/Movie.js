function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="noimage" />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}

export default Movie;
