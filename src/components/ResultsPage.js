import React, {Component} from 'react';
import firebase from '../data/firebase';
import Leaderboard from './Leaderboard';
import '../styles/ResultsPage.css';


class ResultsPage extends Component {
  constructor(){
    super();
    this.state = {
      userCompleted: [],
    }
  }
  
  componentDidMount(){
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const info = response.val();
      const userName = [];
      for (let key in info) {
        userName.push(info[key].name);
      }
      this.setState({
        userCompleted: userName,
      })
    })
  }

  displayLeaderboard = ()=>{

  }

  render(){
    return (
        <div className="wrapper">
          <div className="nygmaContainer">
            {/* image here :) - image of Nygma Machine
              will need to figure out what the Nygma Machine looks  */}
              
            <div className="quoteContainer">
              <p className="resultsName">{`${this.props.userName},`}</p>
              <p className="resultsQuote">{this.props.quote}</p> 
              <ul>
                {this.state.userCompleted.map((name, index)=>{
                  return(
                    <li key={index}>{name}</li>
                  )
                })}
              </ul>
            </div>
            
            <button onClick={this.props.updatePage}>Play Again?</button>
            <button>Leaderboard</button>
          </div>
        </div>
    )
  }
}

export default ResultsPage;