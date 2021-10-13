import React, { Component } from "react";
import { ThemeContext } from "./App";

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initialCount
    }
  }
  render() {
    console.log('Counter Rendered');
    return (
      <ThemeContext.Consumer>
        {style =>
        (<div>
          <button style={style} onClick={() => this.changeCount(-1)}> - </button>
          <span>{this.state.count}</span>
          <button style={style} onClick={() => this.changeCount(1)}> + </button>
        </div>)
        }

      </ThemeContext.Consumer>

    )
  }
  // setState takes 2 forms. new object and function with prevState parameter that returns new Object
  // changeCount(amount) {
  //   this.setState({ count: this.state.count + amount }); // prev state tutmuyor
  // }
  // prev state tutar
  changeCount(amount) {
    this.setState(prevState => {
      return { count: prevState.count + amount }
    });
  }

}