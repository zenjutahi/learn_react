import React, { Component } from 'react';
import { CardList } from './componets/card-list/card-list.componet';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      animes : []
    };
  }

  UNSAFE_componentWillMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(wasee => this.setState({ animes: wasee}))
  }

  render(){
    return (
      <div className="App">
        <CardList>
          {this.state.animes.map(character => (
            <h1 key={character.id}> {character.name} </h1>
            ))}
        </CardList>
      </div>
    );
  }
}

export default App;
