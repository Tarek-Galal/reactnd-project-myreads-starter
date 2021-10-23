import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import Shelf from "./Shelf";
import SearchButton from "./SearchButton";

export class Home extends Component {
  async componentDidMount() {
    try {
      const books = await BooksAPI.getAll();
      this.props.addBooks(books);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { currentlyReading, read, wantToRead, moveBook } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            title="Currently Reading"
            books={currentlyReading}
            moveBook={moveBook}
          />
          <Shelf title="Want To Read" books={wantToRead} moveBook={moveBook} />
          <Shelf title="Read" books={read} moveBook={moveBook} />
        </div>
        <SearchButton />
      </div>
    );
  }
}

export default Home;
