import React, { Component } from "react";

export const myContext = React.createContext();

export class index extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      addBooks: (books) => {
        const currentlyReading = books.filter(
          (book) => book.shelf === "currentlyReading"
        );
        const wantToRead = books.filter((book) => book.shelf === "wantToRead");
        const read = books.filter((book) => book.shelf === "read");
        this.setState({ books, currentlyReading, wantToRead, read });
      },
      moveBook: (book, newShelf, allShelfs) => {
        console.log(newShelf);
        const newBooks = this.state.books.map((allBooks) => {
          const findID = allShelfs[newShelf].find(
            (bookID) => bookID === allBooks.id
          );
          if (findID) {
            allBooks.shelf = newShelf;
          }
          return allBooks;
        });
        this.state.addBooks(newBooks);
      },
    };
  }

  render() {
    return (
      <myContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </myContext.Provider>
    );
  }
}

export default index;
