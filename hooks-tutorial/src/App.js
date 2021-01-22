import { Component, useState } from 'react';
import CounterUseReducer from './CounterUseReducer';
import Info from './Info';

function App() {
  const [visible, setVisible] = useState(false);

  return <CounterUseReducer />;
}

export default App;
