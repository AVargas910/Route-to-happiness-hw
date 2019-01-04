import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/happy' component={Happy} />
        <Route path='/sleepy' component={Sleepy} />
        <Route path='/guilty' component={Guilty} />
      </div>
    </Router>
  )
}

ReactDOM.render( <App />, document.getElementById('root') );
