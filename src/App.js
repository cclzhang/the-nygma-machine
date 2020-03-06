import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import LandingPage from './components/LandingPage';


class App extends Component {
  constructor(){
    console.log("app.js constructed")
    super();

    this.state = {

    }
  }

  componentDidUpdate(){
    console.log("app.js updated")
  }

  componentDidMount(){
    console.log("app.js mounted")
  }
  
  render(){
    console.log("app.js rendered")
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
