import React, { Component, Fragment } from 'react';


class ResultsPage extends Component {
  constructor() {
    super()

    this.state = {

    }
  }


  render() {
    return (
      <Fragment>
        <div className="nygmaContainer">
          {/* image here :) - image of Nygma Machine
            will need to figure out what the Nygma Machine looks  */}
          <button type="button">Play Again?</button>
          <button type="button">Leaderboard</button>
        </div>

        <div className="quoteContainer">
          <p class="quote"></p>
        </div>
      </Fragment>
    )
  }
}

export default ResultsPage;