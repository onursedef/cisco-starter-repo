import React, { Component } from "react";
import Banner from "./components/Banner";
import './App.css'
import Wrapper from './components/Wrapper';
import Exhibit from "./components/Exhibit";
import DisplayIp from "./components/DisplayIp";
import Pylon from "./components/Pylon";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner>
          <h1>Hi mom!</h1>
        </Banner>
        <Wrapper>
          <Exhibit cardText="IPv4(v6)">
            <DisplayIp url="https://api64.ipify.org?format=json" />
          </Exhibit>
          <Exhibit cardText="IPv4">
            <DisplayIp url='https://api.ipify.org?format=json' />
          </Exhibit>
          <Exhibit cardText="Latency">
            <Pylon/>
          </Exhibit>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default App;
