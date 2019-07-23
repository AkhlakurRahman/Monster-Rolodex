import React from 'react';

import './App.css';
import CardList from './Components/CardList/CardList';
import SearchBox from './Components/SearchBox/SearchBox';

class App extends React.Component {
  state = {
    monsters: [],
    searchField: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchFieldChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox onSearchFieldChange={this.onSearchFieldChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
