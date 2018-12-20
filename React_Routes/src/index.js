import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

class Home extends Component{
  render(){
    return(
      <Router>
        <div id='menuBar'>
          <Link to="/">Home</Link>
          <Link to="/happy">Happy</Link>
          <Link to="/sleepy">Sleepy</Link>
          <Link to="/guilty">Guilty</Link>
        </div>
      </Router>
    )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
