import "./app.css";
import AppInfo from "../app-info/AppInfo";
import Search from "../search/search";
import AppFilter from "../app-filter/appFilter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";

function App() {
  const data = [
    { id: 1, name: "Omar", viewers: 950, favorite: false },
    { id: 2, name: "Abdulhamid", viewers: 800, favorite: true },
    { id: 3, name: "Ali", viewers: 650, favorite: false },
  ];
  return (
    <div className="app container p-5">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <Search />
          <AppFilter />
        </div>
        <MovieList data={data} />
        <MoviesAddForm />
      </div>
    </div>
  );
}

export default App;
