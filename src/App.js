import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} />
        {/* <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/skills' component={Skills} />
        <Route path='/contact' component={Contact} /> */}
      </Switch>
    </Router>
  );
}

export default App;
