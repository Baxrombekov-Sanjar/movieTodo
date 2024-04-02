import "./app.css";
import AppInfo from "../app-info/AppInfo";
import Search from "../search/search";
import AppFilter from "../app-filter/appFilter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "Omar", viewers: 950, favorite: false },
        { id: 2, name: "Abdulhamid", viewers: 800, favorite: true },
        { id: 3, name: "Ali", viewers: 650, favorite: false },
      ],
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((i) => i.id !== id),
    }));
  };

  addForm = (item) => {
    this.setState(({ data }) => ({
      data: [...data, item],
    }));
  };
  render() {
    const { data } = this.state;
    return (
      <div className="app container p-5">
        <div className="content">
          <AppInfo />
          <div className="search-panel">
            <Search />
            <AppFilter />
          </div>
          <MovieList data={data} onDelete={this.onDelete} />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
