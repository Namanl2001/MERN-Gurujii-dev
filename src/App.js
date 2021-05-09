import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import './App.css';
import Footer from './components/Footer';
import E404 from './components/E404';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='*' component={E404} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
