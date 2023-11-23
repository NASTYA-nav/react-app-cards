import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import NavMenu from "./components/Nav/nav-menu";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Router />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
