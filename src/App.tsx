import React from 'react';
import './App.css';
import NavMenu from "./components/Nav/nav-menu";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Router />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
