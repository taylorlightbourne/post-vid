import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SingleEventContainer from './components/SingleEventContainer';
import SearchPage from './pages/SearchPage';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
   <>
  <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route exact path="/event/:id" component={SingleEventContainer} />
        <Route path='/search' component={SearchPage} />
        <Route path='/cart' component={Cart} />
        <Route path="/error" component={ErrorPage} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
  </Router>
</>
  );
}

export default App;
