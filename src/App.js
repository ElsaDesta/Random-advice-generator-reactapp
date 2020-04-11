import React from 'react';
import './App.css';
import Axios from 'axios';



class App extends React.Component {
    state = {
        advice: ''
    };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        Axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip;
            //console.log(advice);
            //to access this advice we use setState
            this.setState({ advice: advice});
        })
        .catch((error) => {
            console.log(error)
        });
    }

    render() {
        //const { advice } = this.state; more distructuing for h1 and can just use {advice}
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{this.state.advice}</h1>
                    <button className="btn" onClick={this.fetchAdvice}> Search</button>

                </div>
            </div>
        
        
        
        );
    }
}

export default App;