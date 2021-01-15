import React, { Component } from 'react';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  // 위와 동일
  //   state = {
  //       number: 0,
  //   }
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            // this.setState({ number: number + 1 });
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));

            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
