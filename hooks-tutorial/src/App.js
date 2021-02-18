import { Component, useState } from 'react';
import Average from './Average';
import CounterUseReducer from './CounterUseReducer';
import Info from './Info';

function App() {
  const [visible, setVisible] = useState(false);

  return <Average />;
}

export default App;
