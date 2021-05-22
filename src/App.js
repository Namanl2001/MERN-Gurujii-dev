import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preloader from './components/Preloader';
import healthtips from './components/HealthTips/healthtips';
import './App.css';
import Footer from './components/Footer';
import E404 from './components/E404';
const Home = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/home')), 4000);
  });
});

function App() {
  return (
    <>
      <Router>
        <React.Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/healthtips' component={healthtips} />
            <Route path='*' component={E404} />
          </Switch>
        </React.Suspense>
      </Router>
      <Footer />
    </>
  );
}

export default App;
