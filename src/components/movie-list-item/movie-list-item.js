import { Component } from "react";
import "./movie-list-item.css";

export default class MovieListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { favorite: false, like: false };
  }
  onFavorite = () => {
    this.setState(({ favorite }) => ({
      favorite: !favorite,
    }));
  };
  onLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };
  render() {
    const { name, viewers } = this.props;
    const { favorite, like } = this.state;
    return (
      <li
        className={`list-group-item d-flex justify-content-between ${
          favorite && "favorite"
        } ${like && "like"}`}
      >
        <span onClick={this.onLike} className="list-group-item-label">
          {name}
        </span>
        <input
          type="number"
          className="list-group-item-input"
          defaultValue={viewers}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-cookie btn-sm" type="button">
            <i className="fas fa-cookie" onClick={this.onFavorite} />
          </button>
          <button className="btn-trash btn-sm" type="button">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

// export default function MovieListItem({ name, viewers, favorite }) {
//   return (
//     <li
//       className={`list-group-item d-flex justify-content-between ${
//         favorite && "favorite"
//       }`}
//     >
//       <span className="list-group-item-label">{name}</span>
//       <input
//         type="number"
//         className="list-group-item-input"
//         defaultValue={viewers}
//       />
//       <div className="d-flex justify-content-center align-items-center">
//         <button className="btn-cookie btn-sm" type="button">
//           <i className="fas fa-cookie" />
//         </button>
//         <button className="btn-trash btn-sm" type="button">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// }
