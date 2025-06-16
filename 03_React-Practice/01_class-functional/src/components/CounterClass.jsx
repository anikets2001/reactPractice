import React from "react";

class CounterClass extends React.Component {
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

  componentDidMount() {
    console.log("mounting phase");
  }

  componentDidUpdate() {
    console.log("updating phase");
  }

  componentWillUnmount() {
    console.log("unmounting phase");
  }

  render() {
    return (
      <div className="wrapper">
        <div>
          <h1>Class Component</h1>
        </div>
        <div> Count is:{this.state.count}</div>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default CounterClass;
