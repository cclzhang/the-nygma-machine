import React, { Fragment } from 'react';
import '../styles/ResultsPage.css'

// stateless component
const ResultsPage = (props) => {
  return (
    <Fragment>
      <div className="resultContainer">
        <div className="resultContent">
          <img src="" alt="" className="resultSprite" />
          <p className="resultUserName">{`${props.userName},`}</p>
          <p className="resultAdvice">{props.quote}</p> 
        </div>
          
        <form className="form">
          <button onClick={props.updatePage} className="formButton">Play Again?</button>
          <button className="formButton">Leaderboard</button>
        </form>          

      </div>
    </Fragment>
  )
}

export default ResultsPage;