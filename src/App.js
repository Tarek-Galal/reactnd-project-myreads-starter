import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Provider, { myContext } from "./Provider";
import Home from "./Components/Home";
import Search from "./Components/Search";

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Provider>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <myContext.Consumer>
                  {(context) => <Home {...context} />}
                </myContext.Consumer>
              )}
            />
            <Route
              path="/search"
              render={() => (
                <myContext.Consumer>
                  {(context) => <Search {...context} />}
                </myContext.Consumer>
              )}
            />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default BooksApp;
