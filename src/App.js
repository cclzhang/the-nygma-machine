import React, {Component} from 'react';
import './App.css';

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
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
