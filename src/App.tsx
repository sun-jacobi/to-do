import React from 'react';
import './App.css';
import Pool from './components/Pool';
import { useState } from "react"
import Bar from './components/Bar';



function App() {
  const [tasks, SetTasks] = useState([]);
  return (
    <div className="App">
      <h1> Don't Say Lazy</h1>
      <Bar/>
      <Pool/>
    </div>
  );
}

export default App;



