import { Component } from "react";
import "./movies-add-form.css";
import { uid } from "uid";

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

  addFormHandler = (e) => {
    e.preventDefault();
    this.props.addForm({
      name: this.state.name,
      views: this.state.views,
      id: uid(),
    });
    this.setState({
      name: "",
      views: "",
    });
  };
  render() {
    const { name, views } = this.state;
    const { addForm } = this.props;
    return (
      <div className="movies-add-form">
        <h3>Add new Movie</h3>
        <form className="add-form d-flex" onSubmit={this.addFormHandler}>
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
