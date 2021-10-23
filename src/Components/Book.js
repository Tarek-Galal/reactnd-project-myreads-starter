import React, { Component } from "react";
import { update } from "../BooksAPI";

export class Book extends Component {
  changeHandle = async (x) => {
    try {
      const shelf = x.target.value;
      const book = this.props;
      const result = await update(book, shelf);
      this.props.moveBook(book, shelf, result);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { title, authors, imageLinks, shelf } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  imageLinks ? imageLinks.thumbnail : ""
                })`,
              }}
            />
            <div className="book-shelf-changer">
              <select onChange={this.changeHandle} value={shelf}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">
            {authors ? authors.join(", ") : "Unknown Author"}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
