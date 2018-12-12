import React, {Component} from 'react';
import Table from './Table'; // Add Table.js Class Component

// App Component
class App extends Component {
  render () {

    const characters = [
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

    return (
      <div className="container">
        <h1>Hello, React!</h1>
        {/* Call Table Class Component and pass characters data */}
        <Table characterData={characters}/> 
      </div>
    )
  }
}

export default App;