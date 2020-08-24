import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/about' component={About} />
        <Route exact path='/' component={Home} />
        {/* <Route path='/projects' component={Projects} />
        <Route path='/skills' component={Skills} />
        <Route path='/contact' component={Contact} /> */}
      </Switch>
    </Router>
  );
}

export default App;
