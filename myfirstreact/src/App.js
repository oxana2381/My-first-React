import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppHeader }from "./AppHeader ";
import { AppIntro } from "./AppIntro";

export default function App() {
  return (
    <div className="App">
      <AppHeader logo={logo}/>
      <AppIntro />
    
      
    </div>
  );
}

//export default App;
