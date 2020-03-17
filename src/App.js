import React, { Component } from 'react';
import { CardList } from './componets/card-list/card-list.componet';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      animes : [],
      searchField: ''
    };
  }

  UNSAFE_componentWillMount() {
    fetch('https://api.jikan.moe/v3/search/anime?q=Action&page=1')
    .then(response => response.json())
    .then(res => this.setState({ animes: res.results}))
  }

  render(){
    return (
      <div className="App">
        <input type="search"
            placeholder="search anime"
            onChange={e => {
              this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
              )}
        }/>
        <CardList animes={this.state.animes}/>
      </div>
    );
  }
}

export default App;
