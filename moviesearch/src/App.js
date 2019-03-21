import React, { Component } from 'react';
import './App.css';
import MovieTable from './movieTable';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: []
    };

    this.findMovie();
  }

  findMovie(searchTerm) {
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=86316e13477c0ca3549366b8391490e0&total_results=10&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (movieResults) => {
        console.log(movieResults.results);
        const results = movieResults.results;
        const movieRows = [];
        results.forEach((movie) => {
          const movies = <MovieTable key={movie.id} movie={movie}/>;
          movieRows.push(movies);
        })

        this.setState({rows: movieRows})

      },
      error: () => {
        console.log("error");
      }
    })
  }

  SearchforMovie(event) {
    const searchTerm = event.target.value;
    this.findMovie(searchTerm);
  }

  render() {
    return (
      <div className="App">
        <input className="search-input" placeholder="Enter movie title" onChange={this.SearchforMovie.bind(this)} />
        <div>
          {this.state.rows}
        </div>
      </div>
    );
  }
}

export default App;
