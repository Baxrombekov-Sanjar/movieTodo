import { Component } from "react";
import "./movies-add-form.css";

export default class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      views: "",
    };
  }
  changeHandlerInp = (e) => {
    // console.log(e);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, views } = this.state;
    return (
      <div className="movies-add-form">
        <h3>Add new Movie</h3>
        <form className="add-form d-flex">
          <input
            name="name"
            onChange={this.changeHandlerInp}
            type="text"
            placeholder="What a movie?"
            className="form-control new-post-label"
            value={name}
          />
          <input
            name="views"
            value={views}
            onChange={this.changeHandlerInp}
            type="number"
            placeholder="How much it viewed?"
            className="mx-3 form-control new-post-label"
          />
          <button type="submit" className="btn btn-outline-dark">
            Add
          </button>
        </form>
      </div>
    );
  }
}
