// Created Table.js Class Component

import React, {Component} from 'react';

class Table extends Component {
  render () {
    // Access characters array and removeCharacter method from App Component and assign to props
    const {characterData, removeCharacter} = this.props;

    // (Simple Component is usually a function)
    const TableHeader = () => {
      return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Modify</th>
          </tr>
        </thead>
      );
    }

    // Pass props through TableBody Component as a parameter and map through the characterData array
    const TableBody = (props) => {
      // save characterData array to rows object
      const rows = props.characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
              <button 
                onClick={() => props.removeCharacter(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        )
      });

      // display data from rows obj
      return <tbody>{rows}</tbody>;
    }

    return (
      <table>
        {/* Call TableHeader Component */}
        <TableHeader /> 
        {/* Call TableBody Component with character data from App Component */}
        <TableBody 
          characterData={characterData}
          removeCharacter={removeCharacter}
        /> 
      </table>
    )
  }
}

export default Table;