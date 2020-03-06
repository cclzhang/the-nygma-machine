import React, { Component, Fragment } from 'react';
import '../styles/ResultsPage.css'

// stateless component
const ResultsPage = (props) => {
  return (
    <Fragment>
      <div className="wrapper">
        <div className="nygmaContainer">
          {/* image here :) - image of Nygma Machine
            will need to figure out what the Nygma Machine looks  */}
            
          <div className="quoteContainer">
            { <p class="quote">{props.quote}</p> }
          </div>
          
          <button type="button">Play Again?</button>
          <button type="button">Leaderboard</button>
        </div>
      </div>
    </Fragment>
  )
}

export default ResultsPage;