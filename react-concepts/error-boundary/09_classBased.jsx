/*---

Class Based Components:

1.Its just a javascript class that extends React.Component
2.render() method returns a piece of jsx code
3.To receive the props in class based components we use constructor that takes props,
4.we use super(props) ? Why
5.to create state in class based components, we create state in constructor 

---*/

import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
      </>
    );
  }
}

export default User;
