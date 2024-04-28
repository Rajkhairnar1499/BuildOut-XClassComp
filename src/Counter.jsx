import { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter-container">
        <h2>Counter App</h2>
        <div>Count: {count}</div>
        <div className="buttons">
          <button
            onClick={this.handleDecrement}
            style={{ backgroundColor: "#f34141" }}
          >
            Decrement
          </button>
          <button
            onClick={this.handleIncrement}
            style={{ backgroundColor: "#04AA6D" }}
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
