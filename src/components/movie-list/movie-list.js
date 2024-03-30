import MovieListItem from "../movie-list-item/movie-list-item";
import "./movie-list.css";
export default function MovieList({ data }) {
  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
