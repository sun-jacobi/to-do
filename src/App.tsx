import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pool from './components/Pool';
import { Drawer } from '@mui/material';
import Button from "@mui/material/Button";
import Bar from './components/Bar';

function App() {
  
  return (
    <div className="App">
      <h1> To-Do</h1>
      
      <Bar/>
      <Pool/>
    </div>
  );
}

export default App;



