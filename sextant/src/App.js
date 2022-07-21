import React, { Component } from "react";
import Banner from "./components/Banner";
import './App.css'
import Wrapper from './components/Wrapper';
import Exhibit from "./components/Exhibit";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner>
          <h1>Hi mom!</h1>
        </Banner>
        <Wrapper>
          <Exhibit cardText="Oh,">
            <h2>Hi Mark!</h2>
          </Exhibit>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default App;
