import React, {Component} from 'react';
import Table from './Table'; // Add Table.js Class Component

// App Component
class App extends Component {
  render () {
    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <Table /> {/* Call Table Class Component to render */}
      </div>
    )
  }
}

export default App;