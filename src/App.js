import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    const monsters = [
      {
        name: 'Laura'
      },
      {
        name: 'Fred'
      },
      {
        name: 'Chand'
      }
    ]
    this.state = {
      monsters : monsters,
      searchString: ''
    }
  }
  render(){
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchString);
    });
    return (
      <div className="App">
      <input className='search-box' 
      type='search' 
      placeholder='search bar' 
      onChange= {(event) => {
        console.log(event.target.value);
        const searchString = event.target.value.toLocaleLowerCase(); 
        this.setState(() => {
          return {searchString};
        });
      }
      } 
      />
        {
          filteredMonsters.map((monster) => {
            return <h1 key={monster.name}>{monster.name}</h1>
            })  
        }
      </div>
    );
  }
}

export default App;
