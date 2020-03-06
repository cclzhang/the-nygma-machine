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

    componentDidMount() {
    //     axios({
    //         url: `https://api.adviceslip.com/advice`,
    //         method: 'GET',
    //         responseType: 'json'
    //     }).then((response) => {
    //         console.log(response);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
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

        // test log 
        console.log('name:', this.state.userName);
        console.log('question:', this.state.userQuestion);

        // rng
        const randomIndex = Math.floor(Math.random() * 3);
        console.log(randomIndex);

        const lookupValue = this.state.userQuestion;


        axios({
            url: `https://api.adviceslip.com/advice`,
        }).then((response) => {
            console.log(response);
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