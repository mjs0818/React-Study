import React, { Component } from 'react';
import Counter from './Counter';
import EventPractice from './EventPractice';
import MyComponent from './MyComponent';
import Say from './Say';
import ValidationSample from './ref/ValidationSample';
import ScrollBox from './ref/ScrollBox';
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
