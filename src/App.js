import React, {Component} from 'react';
import './styles/App.css';
import axios from 'axios';
import firebase from './data/firebase';

import Preloader from './components/Preloader';
import LandingPage from './components/LandingPage';
import Maze from './components/Maze'
import ResultsPage from './components/ResultsPage';


// user experience
// userInput for name and question is sent from landing component to here (app) and stored
// upon submission event in landing component, api call is made and stored, and maze component renders for user
// user can interact with maze using 'wasd' keys, arrow keys, or by touch (on mobile)
// upon completion of maze, stored name is sent to firebase, and results component renders for user
// results page will display quote from api call, as well as the option for user to replay the game, or see the leaderboard

// component breakdown (in order of operation)
// App.js
// Preloader.js
// LandingPage.js
// Maze.js
// ResultsPage.js
// Leaderboard.js

// App.js breakdown
// constructor
// storeUserName (f)
// storeUserQuestion (f)
  // value lookup from string logic
  // api call and resulting actions
// firebase store (f)
// replay (f)
// preloader (f)
// render


class App extends Component {
  constructor(){
    super();

    // due to flow of app, rather than use router we displayed components using boolen values
    // quote and name keys are used to store values from submit event handler in landing page component, which is sent here (app), followed by results component
    this.state = {
      isPreloaderShown: true,
      isLandingShown: true,
      isMazeShown: false,
      isResultsShown: false,
      quote: '',
      name: '',
    }
  }

  // userInput (landing component via props) will store in state, which is sent to results component
  storeUserName = (e, userNameInput) => {
    e.preventDefault();
    this.setState({
      name: userNameInput,
    })
  }

  // userInput (landing component via props) will be used in API call and will store in state, which is sent to results component
  storeUserQuestion = (e, question) => {
    e.preventDefault();

    // (recursion function)
    // we use the randomIndex variable to choose a random word from the user's question string array
    // we use the 'badWords' array to remove common words from the axios lookup value
    // if the randomly generated word exists in the badWords array, it'll rerun the function to find a new random word in the user's question string array
    // if the randomly generated word doesn't exist in the badWords array, it'll be used as the lookup value in the axios call
    const getRandomWord = (question) => {
      const randomIndex = Math.floor(Math.random() * question.length);
      const keyWord = question[randomIndex];

      const badWords = [
        // common
        'the', 'to', 'and', 'then', 'this', 'of', 'is', 'if', 'it', 'so', 'a', 'is', 'maybe', 'on', 'for',
        // pronouns
        'i', 'i\'m', 'me', 'you', 'them', 'they', 'we',
        // grammar
        '!', '\'', '"',
      ]

      const keyWordLookup = badWords.includes(keyWord);
      if (keyWordLookup === false) {
        return keyWord;
      }

      getRandomWord(question);
    }

    // storing the lookup value into a variable, which is used in the axios call
    const returnedKeyword = getRandomWord(question);

    axios({
      url: `https://api.adviceslip.com/advice/search/${returnedKeyword}`,
    }).then((response) => {

      // if the initial axios call doesn't have a quote for the lookup value, it'll generate a random advice string
      // otherwise, the axios call will return a random advice string related to the lookup value
      // in both instances, the random advice string is stored in state, to be returned to the App.js component
      // regardless of condition, maze component is rendered
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

  updateResult = () => {
    const dbRef = firebase.database().ref();
    const userDeets = {
      name: this.state.name,
      quote: this.state.quote,
    }
    dbRef.push(userDeets);

    this.setState({
      isMazeShown: false,
      isResultsShown: true,
    });
  }

  // replay function will reset which components are displayed
  replay = () => {
    this.setState({
      isResultsShown: !this.state.isResultsShown,
      isLandingShown: !this.state.isLandingShown,
    });
  }

  componentDidMount(){
    setTimeout(()=> { 
      this.setState({
        isPreloaderShown: false,
      })
    }, 2300);
  }
  
  // by default, we load landing component
  // all other components naturally render false, which is changed upon user input
  // landing component will send intial user input here (app) via props
  // after storing in state here (app), it is sent to results page via props
  // completion of maze will send 
  render(){
    return (
      <div className="App">
        {this.state.isPreloaderShown ? <Preloader /> : null}
        {this.state.isLandingShown ? <LandingPage storeUserQuestion={this.storeUserQuestion} storeUserName={this.storeUserName} />
        : this.state.isMazeShown ? <Maze updatePage={this.updateResult}/>
        : this.state.isResultsShown ? <ResultsPage quote={this.state.quote} userName={this.state.name} updatePage={this.replay}/>
        : null }
      </div>
    );
  }
}

export default App;

