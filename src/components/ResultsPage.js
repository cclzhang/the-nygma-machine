import React, {Component} from 'react';
import firebase from '../data/firebase';
import Leaderboard from './Leaderboard';
import '../styles/ResultsPage.css';


class ResultsPage extends Component {
  constructor() {
    super();

    this.state = {
      userCompleted: [],
      isLeaderboardShown: false,
    }
  }
  
  componentDidMount() {
    // to track if component is mounted or not
    this.componentMounted = true;

    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const info = response.val();
      const userName = [];
      for (let key in info) {
        userName.push(info[key].name);
      }

      // state updates only if component has been mounted - needed to prevent potential memory leak (state updates after component has been unmounted --> received warning)
      if (this.componentMounted) {
        this.setState({
          userCompleted: userName,
        })
      }
    })
  }

  componentWillUnmount() {
    this.componentMounted = false;
  }

  toggleLeaderboard = (e) => {
    e.preventDefault();
    this.setState({
      isLeaderboardShown: !this.state.isLeaderboardShown,
    })
  }

  render() {
    return (
      <div className="resultContainer">
        <div className="resultContent">
          <img src="" alt="" className="resultSprite" />
          <p className="resultUserName">{`${this.props.userName},`}</p>
          <p className="resultAdvice">{this.props.quote}</p> 
        </div>
        
        <form className="form">
          <button onClick={this.props.updatePage} className="formButton">Play Again?</button>
          <button onClick={this.toggleLeaderboard} className="formButton">Leaderboard</button>
        </form>          
        {this.state.isLeaderboardShown ? <Leaderboard toggleLeaderboard={this.toggleLeaderboard} content={this.state.userCompleted}/> : null}
      </div>
    )
  }
}

export default ResultsPage;