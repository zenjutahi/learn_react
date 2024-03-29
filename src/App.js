import React, { Component } from 'react';
import { CardList } from './componets/card-list/card-list.componet';
import { SearchBox } from './componets/search-box/search-box.component';
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
    fetch('https://api.jikan.moe/v3/top/anime/1')
    .then(response => response.json())
    .then(res => this.setState({ animes: res.top}))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render(){
    const { animes, searchField } = this.state;
    const filteredAnimes = animes.filter(anime =>
      anime.title.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Anime Rolodex</h1>
        <SearchBox
          placeholder="search anime"
          handleChange={this.handleChange}
        />
        <CardList animes={filteredAnimes}/>
      </div>
    );
  }
}

export default App;
