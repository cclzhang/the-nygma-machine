import React, { Component } from 'react';
import axios from 'axios';

class LandingPage extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <main>
                <header>
                    <h1>Sup</h1>
                    <div className="imageContainer">
                        <img src="" alt=""/>
                    </div>
                </header>
                <form action="">
                    <label htmlFor="">What's your name?</label>
                    <input type="text"/>
                    <label htmlFor="">Ask your question</label>
                    <input type="text"/>
                    <button type="submit">Submit</button>
                </form>
            </main>
        )
    }
}

export default LandingPage;