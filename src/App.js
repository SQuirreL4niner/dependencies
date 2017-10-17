import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DependencyForm from './components/DependencyForm';
import DependencyTest from './components/DependencyTest';
import Dependency from './components/Dependency';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path='/build/' component={Dependency}/>
            <Route path='/test' component={DependencyTest}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
