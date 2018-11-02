import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props)
    console.log('This is my init')

    const movies = [
      { id: 0, title: 'Awangers', overview: 'blalkdsfklfdkfdklfdklkldfslkdf' },
      { id: 1, title: 'Superman', overview: 'blalkdsfklfdkfdklfdklkldfslkdf' },
      { id: 2, title: 'Batman', overview: 'blalkdsfklfdkfdklfdklkldfslkdf' },
    ]

    this.state = {
      rows: [
        <p key="1">This is my row 1</p>,
        <p key="2">This is my row 2</p>,
        <p key="3">This is my row 3</p>,
      ]
    }

    let movieRows = []

    movies.forEach((movie) => {
      console.log(movie.title)
      movieRows.push(<p> movie title: {movie.title}</p>)
    });

    this.state = {rows: movieRows}
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
