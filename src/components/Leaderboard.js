import React from 'react';
import '../styles/Leaderboard.css';

const Leaderboard = (props) => {
  return (
    <div className="leaderboardContainer">
      <div className="leaderboardContent">
        <h2 className="leaderboardHeader">Those who have conquered the journey</h2>
        <button onClick={props.toggleLeaderboard}>X</button>
        <ul>
          {props.content.map((name, index) => {
            return (
              <li key={index}>{name}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Leaderboard;