import React, { Component } from 'react';
import axios from 'axios';
import '../styles/LandingPage.css'

class LandingPage extends Component {
    constructor(){
        super();

        this.state = {
            userName: '',
            userQuestion: [],
        }
    }

    componentDidMount() {
        axios({
            url: `https://api.adviceslip.com/advice`,
            method: 'GET',
            responseType: 'json'
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        
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
                <form action="" onSubmit="handleFormSubmit">
                    <label htmlFor="">What's your name?</label>
                    <input type="text" placeholder="Batman" id="userName" value={this.state.userName}/>
                    <label htmlFor="">Ask your question</label>
                    <input type="text" placeholder="Does the Joker think I'm cute?" id="userQuestion" value={this.state.userQuestion}/>
                    <button type="submit">Submit</button>
                </form>
            </main>
        )
    }
}

export default LandingPage;