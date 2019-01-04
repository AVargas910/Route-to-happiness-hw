import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
  render(){
    return(
        <div id='menuBar'>
          <Link to="/">Home</Link>
          <Link to="/happy">Happy</Link>
          <Link to="/sleepy">Sleepy</Link>
          <Link to="/guilty">Guilty</Link>
        </div>
    )
  }
}

export default Home;
