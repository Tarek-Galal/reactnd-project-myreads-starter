import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SearchButton extends Component {
  render() {
    return (
      <div className="open-search">
        <Link to={"/search"}>
          <button>Add a book</button>
        </Link>
      </div>
    );
  }
}

export default SearchButton;
