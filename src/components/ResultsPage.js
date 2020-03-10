import React, {Component} from 'react';
import firebase from '../data/firebase';
import Leaderboard from './Leaderboard';
import '../styles/ResultsPage.css';


class ResultsPage extends Component {
  constructor(){
    super();
    this.state = {
      userCompleted: [],
      isLeaderboardShown: false,
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

  toggleLeaderboard = (e)=>{
    e.preventDefault();
    this.setState({
      isLeaderboardShown: !this.state.isLeaderboardShown,
    })
  }

  render(){
    return (
        <div className="resultContainer">
          <div className="resultContent">
            <img src="" alt="" className="resultSprite" />
            <p className="resultUserName">{`${this.props.userName},`}</p>
            <p className="resultAdvice">{this.props.quote}</p> 
          </div>

          {/* add prevent default action for form*/}
          <form className="form">
            <button onClick={this.props.updatePage} className="formButton">Play Again?</button>
            <button onClick={this.toggleLeaderboard} className="formButton">Leaderboard</button>
          </form>          
          {this.state.isLeaderboardShown ? <Leaderboard content={this.state.userCompleted}/> : null}
        </div>
    )
  }

}

export default ResultsPage;