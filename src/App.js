import React, { Component } from 'react';
import { CardList } from './componets/card-list/card-list.componet';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      animes : [],
      images : []
    };
  }

  UNSAFE_componentWillMount() {
    fetch('https://api.jikan.moe/v3/search/anime?q=Action&page=1')
    .then(response => response.json())
    .then(res => this.setState({ animes: res.results}))
    fetch('https://api.jikan.moe/v3/anime/1/pictures')
    .then(response => response.json())
    .then(res => this.setState({ images: res.pictures}))
  }

  render(){
    return (
      <div className="App">
        <CardList animes={this.state.animes} images={this.state.images}/>
      </div>
    );
  }
}

export default App;
