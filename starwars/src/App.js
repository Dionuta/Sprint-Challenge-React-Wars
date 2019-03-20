import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'

class App extends Component {
    
    state = {
      starwarsChars: []  
    };
  

  componentDidMount = () => { //Binding with arrow function
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    const {starwarsChars} = this.state; //ES6 Destructuring
    return (
      <div className="App">
      <div className="container">
        {starwarsChars.map(character => //  mapping
        <Card
         {...character} // use of ES6 for name/value pairs with spread operator
         key={character.created} //unique key equal exact time created
         />
        )}
        </div>
      </div>
    );
  }
}

export default App;
