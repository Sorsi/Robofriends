import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow';



class App extends Component {
  constructor(props) {
    super(props)
    console.log('This is my init')

    const movies = [
      { id: 0, poster_src: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/1ZEJuuDh0Zpi5ELM3Zev0GBhQ3R.jpg', title: 'Awangers', overview: 'blalkdsfklfdkfdklfdklkldfslkdf' },
      { id: 1, poster_src: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/7Gfda4S0FpWf6edfGFm0xJgRJ4b.jpg', title: 'Superman', overview: 'blalkdsfklfdkfdklfdklkldfslkdf' },
      { id: 2, poster_src: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/dnLvZJD8Zdw2fHzL4AtM0kZSkt2.jpg', title: 'Batman', overview: 'blalkdsfklfdkfdklfdklkldfslkdf' },
    ]

    let movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <MovieRow movie={movie} />
      movieRows.push(movieRow)
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
