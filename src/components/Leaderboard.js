import React from 'react';

const Leaderboard = (props) => {
    return (
      <ul>
        {props.content.map((name, index) => {
          return (
            <li key={index}>{name}</li>
          )
        })}
      </ul>
    )
}

export default Leaderboard;