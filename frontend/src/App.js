import React, { Component } from "react";
// import logo from './logo.svg';
// import "./App.css";
import Forms from "./Components/Forms";
import Submitted from "./Components/Submitted";
import { BrowserRouter, Route } from "react-router-dom";
// import "bootstrap/dist/css/boostrap.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="page-header">
            <h1>Testing</h1>
          </div>
          <Route path="/form-create" component={Forms} />
          <Route path="/form-submitted" component={Submitted} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;