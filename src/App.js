import "./styles/App.css";
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
