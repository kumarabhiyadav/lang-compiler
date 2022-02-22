import React from 'react';
import logo from './logo.svg';
  import './App.css';
import NavBar from './components/NavBar';
import Input from './components/Inputs';
import LangSelection from './components/LangSelection';

function App() {
  return (
    <div className="App container-fluid">
    <NavBar />

    <div
    style={{height:20}}
    ></div>

    <div style={{display:'flex', }}>
      
  <LangSelection />
  <Input/>
    </div>
       </div>
  );
}

export default App;
