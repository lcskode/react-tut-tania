import React, {Component} from 'react';
import Table from './Table'; // Add Table.js Class Component

class App extends Component {
  // set characters array
  state = {
    characters: []
  }
  
  // remove data from characters array with selected index
  removeCharacter = (index) => {
    const {characters} = this.state;

    this.setState({
      // remove character with selected index and return all characters not equal to selected index to characters array
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  render () {
    return (
      <div className="container">
        <h1>Hello, React!</h1>
        {/* Call Table Component and pass characters array through */}
        <Table 
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        /> 
      </div>
    )
  }
}

export default App;