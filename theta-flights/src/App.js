import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import Register from './components/pages/Register';
import Results from './components/pages/Results';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
   <>
  <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/search' component={Search} />
        <Route path='/register' component={Register} />
        <Route path='/results' component={Results} />
      </Switch>
  </Router>
</>
  );
}

export default App;
// http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/FR/eur/en-US/uk/us/anytime/anytime?apikey=prtl6749387986743898559646983194