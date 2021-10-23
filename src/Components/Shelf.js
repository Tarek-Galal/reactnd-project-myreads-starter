import React, { Component } from "react";
import Book from "./Book";

export class Shelf extends Component {
  render() {
    const { title, books, moveBook } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books &&
              books.map((book) => (
                <Book key={book.id} {...book} moveBook={moveBook} />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
