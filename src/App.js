import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import Search from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: '',
    };
  }

  handleSearch = (e) => {
    const searchVal = e.target.value;

    this.setState({ search: searchVal });
  };

  //When react mounts the or let's say renders the jsx to the DOM, after that process, it calls componentDidMount() function and executes the content of the function.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, search } = this.state;
    const searchResult = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className='App'>
        <Search
          search={this.state.search}
          SearchMonster={this.handleSearch}
          placeholder='search monster'
        />
        <CardList monsters={searchResult} />
      </div>
    );
  }
}

export default App;
