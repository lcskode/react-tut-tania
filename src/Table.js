import React, {Component} from 'react';

class Table extends Component {

  

  render () {
    // Simple Component TableHeader
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
      return (
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring Actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      );
    }

    return (
      <table>
        <TableHeader /> {/* Call TableHeader Component */}
        <TableBody /> {/* Call TableBody Component */}
      </table>
    )
  }
}

export default Table;