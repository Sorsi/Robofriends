import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    rows: [
    <p key="1">This is my row</p>,
    <p key="2">This is my row</p>,
    <p key="3">This is my row</p>,
    ]
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="100" src="image.svg" alt="logo" />
              </td>
              <td width="8"></td>
              <td>
                <h1>MovieDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          className="inputField"
          placeholder="Search here"
          type="text"
        />
      {this.state.rows}
      </div>
    );
  }
}

export default App;
