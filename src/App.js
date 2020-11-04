import React from 'react';
import './App.css';

import MoviePanel from './components/moviePanel'
import searchWithTitel, { searchWithId } from './api/omdbAPI';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movieQuery: '',
      movies: [],
      selectedMovies: []
    };
  }

  handleChange = (event) => {
    this.setState({movieQuery: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.movieQuery === "") {
      alert("Type the name of the movie"); 
      return;
    }

    searchWithTitel(this.state.movieQuery)
      .then(results => {
        this.setState({movies: results.Search});
      });
  }

  addToSelectedMovies = (movieId) => {
    const isSelected = this.state.selectedMovies.some(movie => 
      movie.imdbID === movieId
    );

    if (!isSelected) {
      searchWithId(movieId)
        .then(result => {
          const copyState = {...this.state};
          copyState.selectedMovies.push(result);
          this.setState({selectedMovies: copyState.selectedMovies});
        });
    }
  }

  removeSelectedMovie = (movieId, event) => {
    event.preventDefault();

    const copyState = {...this.state};
    const index = copyState.selectedMovies.findIndex(m => m.imdbID === movieId);
    copyState.selectedMovies.splice(index, 1);
    this.setState(copyState)
  }
  
  render() {
    return (
      <div className="App">
        <form className="search-bar" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.movieQuery} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        
        <div className="grid-container">
          <div className="span-1">
            {this.state.movies
              .map(movie => 
                <MoviePanel key={movie.imdbID} movie={movie} addToSelectedMovies={this.addToSelectedMovies}/>
              )}
          </div>

          <div className="span-2">
            {this.state.selectedMovies
              .map(selectedMovies => 
                <React.Fragment>
                  <h6 key={selectedMovies.imdbID}>{selectedMovies.Title}</h6>
                  <button onClick={(e) => this.removeSelectedMovie(selectedMovies.imdbId, e)}>Remove</button>
                </React.Fragment>
              )
            }
          </div>
        </div>
      </div>
    );
  }  
}

export default App;
