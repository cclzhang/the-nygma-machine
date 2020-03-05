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

    axios({
      url: `https://api.adviceslip.com/advice`,
      method:'GET',
      responseType: 'json'
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })

    // ********* axios call using search term entered from user input
    // const getAdviceSearch = (searchTerm) => {
    //   axios({
    //     url: `https://api.adviceslip.com/advice/search/${searchTerm}`,
    //     method:'GET',
    //     responseType: 'json'
    //   }).then((response) => {
    //     console.log(response);
    //   })
    // }

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
