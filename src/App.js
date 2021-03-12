import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import './App.css';
import Board from './board.jpg';
function App() {
  return (
    <Router>
      <div 
      className='parallax'>
        <Navbar />
        <br />
        <br />
        <br />
        <div className='center'>
          <img src={Board} alt='' />
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>

      <br />
      <Route path='/' exact component={Home} />
    </Router>
  );
}

export default App;
