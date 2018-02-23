import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

class App extends Component {
  state = {
    numCol: 3,
    colHeight: 760,
    isGreen: true,
    lineItems: [{ title: "Line item title", subtitle: "Subheader here", detail: "A detail"}, { title: "Line item title", subtitle: "Subheader here", detail: "A detail"}, { title: "Line item title", subtitle: "Subheader here", detail: "A detail"}]
  }

  _btnClick = color => {
    if (color === "green") {
      this.setState({ isGreen: true });
    } else {
      this.setState({ isGreen: false });
    };
  }

  _handleInput = e => {
    const value = parseInt(e.target.value);
    console.log(value, typeof(value));
    if (value) {
      const stateObj = {
        [e.target.name]: value
      };
      this.setState(stateObj);
    } else {
      console.log("Input is not a number");
    }
  }

  render() {
    return (
      <div className="container">
        <Header isGreen={this.state.isGreen} btnClick={this._btnClick}/>
        <Body lineItems={this.state.lineItems} handleInput={this._handleInput} numCol={this.state.numCol} isGreen={this.state.isGreen} height={this.state.colHeight}/>
        <div className="fixed-bottom fixed-thing row align-bottom">
          <img src="./Assets/Screw.svg" alt="screw"/>
          <p className="fixed">Fixed to Bottom</p>
          <img src="./Assets/Screw.svg" alt="screw"/>
        </div>
      </div>
    );
  }
}

export default App;
