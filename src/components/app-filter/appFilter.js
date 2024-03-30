import "./appFilter.css";
export default function AppFilter() {
  return (
    <div className="btn-group">
      <button className="btn btn-dark" type="button">
        All Movies
      </button>
      <button className="btn btn-outline-dark" type="button">
        Famous Movies
      </button>
      <button className="btn btn-outline-dark" type="button">
        Most viewed Movies
      </button>
    </div>
  );
}
