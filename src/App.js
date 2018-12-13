import React, {Component} from 'react';
import Table from './Table'; // Add Table.js Class Component

// App Component
class App extends Component {
  
  state = {
    characters: [
      {
        'name': 'Charlie',
        'job': 'Janitor'
      },
      {
        'name': 'Mac',
        'job': 'Bouncer'
      },
      {
        'name': 'Dee',
        'job': 'Aspiring Actress'
      },
      {
        'name': 'Dennis',
        'job': 'Bartender'
      }
    ]
  }
  
  // 
  removeCharacter = (index) => {
    const {characters} = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  render () {
    return (
      <div className="container">
        <h1>Hello, React!</h1>
        {/* Call Table Class Component and pass characters array through */}
        <Table 
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        /> 
      </div>
    )
  }
}

export default App;