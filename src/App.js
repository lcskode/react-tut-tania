import React, {Component} from 'react';
import Table from './Table'; // Add Table.js Component

// App Component
class App extends Component {
  render () {
    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <Table /> {/* Call Table component to render */}
      </div>
    )
  }
}

export default App;