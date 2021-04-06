import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ChatBotComponent from './components/chatbot';
import './App.css';
import Board from './board.jpg';
import ContactUS from './components/ContactUS';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <div className='parallax'>
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
        <ChatBotComponent />
      </Router>
      <ContactUS />
      <Footer />
    </>
  );
}

export default App;
