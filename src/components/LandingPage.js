import React, { Component } from 'react';
import '../styles/LandingPage.css'
import Preloader from './Preloader';

class LandingPage extends Component {
  constructor(){
    super();
    
    this.state = {
      userName: '',
      userQuestion: '',
      userQuestionArray: [],
      isPreloaderShown: true,
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
      userQuestion: questionString,
      userQuestionArray: questionArray,
    })
  }

  clickHandler = (e) => {
    e.preventDefault();
    if (this.state.userName === '' && this.state.userQuestion.length === 0) {
      alert('The machine requires your name and question!');
    } else if (this.state.userName === '') {
      alert('The machine requires your name!');
    } else if (this.state.userQuestion.length === 0) {
      alert('The machine requires a question!');
    } else {
      this.props.storeUserQuestion(e, this.state.userQuestion);
      this.props.storeUserName(e, this.state.userName);

      // reset values back to blank after form submitted
      // after submission there is nothing in the inputs and because we have binded our inputs (using value attribute) // we want to make sure everything is in sync
      this.setState({
        userName: '',
        userQuestion: '',
        userQuestionArray: [],
      })
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isPreloaderShown: false,
      })
    }, 2700);
  }
  
  render() {
    return (
      <div className="landingPage wrapper">
        {this.state.isPreloaderShown ? <Preloader /> : null}
        <header>
          <h1 className="headTitle">Nygma Machine</h1>
          <h2 className="headInstructions">Ask your question for some advice</h2>
          <div className="headImageContainer">
            <img src={require('../assets/riddlerSprite.png')} alt="the Riddler" className="headImage"/>
          </div>
        </header>
        <main>
          <form>
            {/* <label htmlFor="userName" className="formLabel">What's your name?</label> */}
            <input 
              type="text" 
              placeholder="Batman" 
              id="userName" 
              onChange={this.handleNameChange} 
              value={this.state.userName}
              className="formInput"
            />
            {/* <label htmlFor="userQuestion" className="formLabel">Ask your question</label> */}
            <input 
              type="text" 
              placeholder="Does the Riddler think I'm cute?" 
              id="userQuestion" 
              onChange={this.handleQuestionChange}
              value={this.state.userQuestion}
              className="formInput"
            />
            <button type="submit" onClick={this.clickHandler} className="formButton">Submit</button>
          </form>
        </main>  
      </div>  
    )
  }
}

export default LandingPage;