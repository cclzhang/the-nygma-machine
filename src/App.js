import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import LandingPage from './components/LandingPage';
import Maze from './components/Maze'
import ResultsPage from './components/ResultsPage';


class App extends Component {
  constructor(){
    super();

    this.state = {
      isLandingShown: true,
      isMazeShown: false,
      isResultsShown: false,
      quote: '',
      name: '',
    }
  }

  updateResult = () => {
    this.setState({
      isMazeShown: false,
      isResultsShown: true,
    });
  }

  replay = () => {
    this.setState({
      isResultsShown: !this.state.isResultsShown,
      isLandingShown: !this.state.isLandingShown,
    });
  }

  storeUserName = (e, userNameInput) => {
    e.preventDefault();
    this.setState({
      name: userNameInput,
    })
  }

  storeUserQuestion = (e, question) => {
    e.preventDefault();

    // (recursion function)
    // we use the randomIndex variable to choose a random word from the user's question string array
    // we use the 'badWords' array to remove common words from the axios lookup value
    // if the randomly generated word exists in the badWords array, it'll rerun the function to find a new random word in the user's question string array
    // if the randomly generated word doesn't exist in the badWords array, it'll be used as the lookup value in the axios call
    const getRandomWord = (question) => {
      const randomIndex = Math.floor(Math.random() * question.length);
      const badWords = [
        // common
        "the", "to", "and", "then", "this", "of", "is", "if", "it", "so", "a", "is", "maybe", "on", "for",
        // pronouns
        "i", "i'm", "me", "you", "them", "they", "we", "it",
        // grammar (revist this)
        "!", "'", "\"",
      ]

      const keyWord = question[randomIndex];
      const keyWordLookup = badWords.includes(keyWord);

      if (keyWordLookup === false) {
        return keyWord;
      }

      getRandomWord(question);
    }

    // storing the lookup value into a variable, used in the axios call
    const returnedKeyword = getRandomWord(question);

    axios({
      url: `https://api.adviceslip.com/advice/search/${returnedKeyword}`,
    }).then((response) => {

      // if the initial axios call doesn't have a quote for the lookup value, it'll generate a random advice string
      // otherwise, the axios call will return a random advice string related to the lookup value
      // in both instances, the random advice string is stored in state, to be returned to the App.js component
      if (response.data.message) {
        axios({
          url: 'https://api.adviceslip.com/advice',
        }).then((response) => {
          this.setState({
            quote: response.data.slip.advice,
            isLandingShown: !this.state.isLandingShown,
            isMazeShown: !this.state.isMazeShown,
          });
        })

      } else {
        const randomIndex = Math.floor(Math.random() * response.data.slips.length);
        this.setState({
          quote: response.data.slips[randomIndex].advice,
          isLandingShown: !this.state.isLandingShown,
          isMazeShown: !this.state.isMazeShown,
        });
      }
    });


    
  }

  
  
  render(){
    return (
      <div className="App">
        {/* {this.state.isLandingShown && this.state.isMazeShown === false && this.state.isResultsShown === false ? <LandingPage /> : null } */}
        {this.state.isLandingShown ? <LandingPage storeUserQuestion={this.storeUserQuestion} storeUserName={this.storeUserName} />
        : this.state.isMazeShown ? <Maze updatePage={this.updateResult}/>
        : this.state.isResultsShown ? <ResultsPage quote={this.state.quote} userName={this.state.name} updatePage={this.replay}/>
        : null }
      </div>
    );
  }
}

export default App;
