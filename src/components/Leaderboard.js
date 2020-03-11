import React, { Fragment } from 'react';
import '../styles/Leaderboard.css';

const Leaderboard = (props) => {
  return (
    <div className="leaderboardContainer">
      <h2 className="leaderboardHeader">Leaderboard</h2>
      <button onClick={props.toggleLeaderboard}>X</button>
      <ul>
        {props.content.map((name, index) => {
          return (
            <li key={index}>{name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Leaderboard;