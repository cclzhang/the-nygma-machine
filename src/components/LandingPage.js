import React, { Component } from 'react';
import axios from 'axios';
import '../styles/LandingPage.css'

class LandingPage extends Component {
  constructor(){
    super();
    
    this.state = {
      userName: '',
      userQuestion: [],
      quote: '',
    }
  }

  handleNameChange = (e) => {
    this.setState({
      userName: e.target.value,
    })
  }
  
  handleQuestionChange = (e) => {
    const questionString= e.target.value;
    // taking the question and converting it to an array
    const questionArray = questionString.trim().split(' ');
    
    this.setState({
      userQuestion: questionArray,
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const questionStringArray = this.state.userQuestion;

    // (recursion function)
    // we use the randomIndex variable to choose a random word from the user's question string array
    // we use the 'badWords' array to remove common words from the axios lookup value
    // if the randomly generated word exists in the badWords array, it'll rerun the function to find a new random word in the user's question string array
    // if the randomly generated word doesn't exist in the badWords array, it'll be used as the lookup value in the axios call
    const getRandomWord = (questionStringArray) => {
      const randomIndex = Math.floor(Math.random() * questionStringArray.length);
      const badWords = [
        // common
        "the", "to", "and", "then",
        // pronouns
        "i", "i'm", "me", "you", "them", "they",
        // grammar (revist this)
        "!", , "'", "\"",
      ]
      
      const keyWord = questionStringArray[randomIndex];
      const keyWordLookup = badWords.includes(keyWord);

      if(keyWordLookup === false) {
        return keyWord;
      }

      getRandomWord(questionStringArray);
    }
      
    // storing the lookup value into a variable, used in the axios call
    const returnedKeyword = getRandomWord(questionStringArray);
    
    axios({
      url: `https://api.adviceslip.com/advice/search/${returnedKeyword}`,
    }).then((response) => {

    // if the initial axios call doesn't have a quote for the lookup value, it'll generate a random advice string
    // otherwise, the axios call will return a random advice string related to the lookup value
    // in both instances, the random advice string is stored in state, to be returned to the App.js component
    if(response.data.message) {
      axios({
        url: 'https://api.adviceslip.com/advice',
      }).then((response) => {
        this.setState({
          quote: response.data.slip.advice
        });
      })
    
    } else {
      const randomIndex = Math.floor(Math.random() * response.data.slips.length);
      this.setState({
        quote: response.data.slips[randomIndex].advice
      });
    }
    });
  }
  
  render() {
    return (
      <main className="wrapper">
        <header>
          <h1>Welcome to the Nygma Machine</h1>
          <h2>Ask your question for some advice</h2>
          <div className="imageContainer">
            <img src="" alt=""/>
          </div>
        </header>
        <form action="" onSubmit={this.handleFormSubmit}>
          <label htmlFor="">What's your name?</label>
          <input type="text" placeholder="Batman" id="userName" onChange={this.handleNameChange} />
          <label htmlFor="">Ask your question</label>
          <input type="text" placeholder="Does the Joker think I'm cute?" id="userQuestion" onChange={this.handleQuestionChange}/>
          <button type="submit">Submit</button>
        </form>
      </main>
    )
  }
}

export default LandingPage;