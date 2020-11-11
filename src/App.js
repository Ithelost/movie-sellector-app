import React from 'react';
import './App.css';

import PersonalSelectedMovie from './components/personalSelectedMovie'
import MoviePanel from './components/moviePanel'
import SuggestionsQueryPanel from './components/suggestionsQueryPanel'

import { searchWithTitel, searchWithId } from './api/omdbAPI';
import CustomButton from './components/customElements/customButton';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movieQuery: '',
      movies: [],
      selectedMovies: []
    };

    window.onresize = window.onload = function() {
      var gridElement = document.querySelector('.grid-container-movie-panel');
    
      var width = window.innerWidth;
      var collums = 4;
      
      if (width < 1600) collums -= 1;
      if (width < 1300) collums -= 1;
      if (width < 1000) collums -= 1;
      
      gridElement.style["grid-template-columns"] = "repeat(" + collums + ", auto)";
    }
  }

  handleChangeMovieQuery = (event) => {
    const copyState = {...this.state};
    copyState.movieQuery = event.target.value;
    this.setState(copyState);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.movieQuery === "") {
      alert("Type the name of the movie"); 
      return;
    }

    searchWithTitel(this.state.movieQuery)
      .then(results => {
        if (results.Response === "True") this.setState({movies: results.Search});
        else {
          //TODO Movies not found
          alert("No movies found!")
        }
      });
  }

  addToSelectedMovies = (movieId, event) => {
    event.preventDefault();

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
    // event.preventDefault();

    const copyState = {...this.state};
    const index = copyState.selectedMovies.findIndex(m => m.imdbID === movieId);
    copyState.selectedMovies.splice(index, 1);
    this.setState(copyState)
  }

  suggestMoviesBtn = () => {
    var x = document.getElementById("suggestMovies");
    if (x.style.width !== "100%") {
      x.style.width = "100%";
    } else {
      x.style.width = "0%";
    }
  }
  
  render() {
    return (
      <div className="App">
        <form className="search-bar" onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.movieQuery} onChange={this.handleChangeMovieQuery} placeholder="Type here the name of a movie or serrie"/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        
        <div className="grid-container">
          <div className="grid-container-movie-panel">
            {
              this.state.movies
              .map(movie => 
                <MoviePanel key={movie.imdbID} movie={movie} addToSelectedMovies={this.addToSelectedMovies}/>
              )
            }
          </div>

          <div className="grid-container-sellected-movies" hidden={this.state.movies.length === 0}>
            <div className="header-sellected-movies">
              <p>Your sellected movies and serries</p>
              <CustomButton title="Start sellection" onClickBtn={() => this.suggestMoviesBtn()}></CustomButton>
            </div>
            {
              this.state.selectedMovies
              .map(selectedMovies => 
                <PersonalSelectedMovie key={selectedMovies.imdbID} movie={selectedMovies} removeSelectedMovie={this.removeSelectedMovie}></PersonalSelectedMovie>
              )
            }
          </div>
        </div>

        {/* <SuggestionsQueryPanel selectedMovies={[{Genre: 'fantasy, horror', Language: 'English'}]} closeBtn={this.suggestMoviesBtn}></SuggestionsQueryPanel> */}
        <SuggestionsQueryPanel selectedMovies={this.state.selectedMovies} closeBtn={this.suggestMoviesBtn}></SuggestionsQueryPanel>

      </div>
    );
  }  
}

export default App;
