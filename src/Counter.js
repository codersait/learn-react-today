import React, { Component } from "react";

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
      <div>
        <button onClick={() => this.changeCount(-1)}> - </button>
        <span>{this.state.count}</span>
        <button onClick={() => this.changeCount(1)}> + </button>
      </div>
    )
  }
  // setState takes 2 forms. new object and function with prevState parameter that returns new Object
  changeCount(amount) {
    this.setState(prevState => {
      return { count: prevState.count + amount }
    });
  }

}