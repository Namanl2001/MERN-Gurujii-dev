import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ChatBotComponent from './components/chatbot';
import './App.css';
import Board from './board.jpg';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/useDarkMode';
import Toggle from './components/Toggle';
import { lightTheme, darkTheme } from './components/themes';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <Router>
        <ThemeProvider theme={themeMode}>
          <div className='parallax'>
            <Navbar />
            <br />
            <br />
            <br />
            <div className='center'>
              <img src={Board} alt='' />
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
          <br />
          <Route path='/' exact component={Home} />
        </ThemeProvider>
        <ChatBotComponent />
      </Router>
      <Footer />
    </>
  );
}

export default App;
