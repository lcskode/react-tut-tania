// Created Table.js Class Component

import React, {Component} from 'react';

class Table extends Component {
  render () {
    // Access character data from App.js since Table Component has the character data
    const {characterData} = this.props;

    // Simple Component TableHeader (Simple Component is usually a function)
    const TableHeader = () => {
      return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
      );
    }

    // Simple Component TableBody
    const TableBody = () => {
      return <tbody></tbody>;
    }

    return (
      <table>
        {/* Call TableHeader Component */}
        <TableHeader /> 
        {/* Call TableBody Component with character data from App.js */}
        <TableBody characterData={characterData}/> 
      </table>
    )
  }
}

export default Table;