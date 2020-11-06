import React from 'react';
import './suggestionsQueryPanel.css'

class SuggestionsQueryPanel extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      Genres: [],
      ReleasedYears: [],
      Languages: [],
      movieSuggestionResult: []
    };
    
    var self = this;
    window.onload = function() {
      const el = document.getElementById("suggestMovies")
      if (el) el.addEventListener("transitionrun", function(){
        self.updateState();
      });
    }
  }

  updateState = () => {
    console.log(this.props);

    var copyState = {...this.state};
    const movieList = this.props.selectedMovies;
    if (movieList === []) return;

    for (var i = 0; i < Object.keys(movieList).length; i++){
      movieList[i].Genre.split(", ").map(genre => {
        if (!copyState.Genres.includes(genre) && genre !== "N/A") copyState.Genres.push(genre);
        return genre;
      })

      // BUGGED to many itteration of vallue also can change to Released
      // const year = movieList[i].Year;
      // if (!copyState.Years.includes(year)) copyState.Years.push(year);

      const language = movieList[i].Language;
      language.split(", ").map(language => {
        if (!copyState.Languages.includes(language) && language !== "N/A") copyState.Languages.push(language);
        return language;
      })
    
    }
    this.setState(copyState);
  }

  submitQuery = (event) => {
    event.preventDefault();
    // TODO check if N/A
    // CHeck if it's viable
    console.log("sumbit query")

    const gengreChoice = document.getElementById("genre-choice").value
    // const yearChoice = document.getElementById("year-choice").value
    const languageChoice = document.getElementById("language-choice").value
    
    const movieList = this.props.selectedMovies;

    const movieSuggestionResult = movieList.filter(movie => {
      var hasGenre = true;
      var hasLanguage = true;

      if (gengreChoice !== "nvt" && movie.Genre !== "N/A") {
        hasGenre = movie.Genre.split(", ").includes(gengreChoice);
      }
      if (languageChoice !== "nvt" && movie.Language !== "N/A") {
        hasLanguage = movie.Language.split(", ").includes(languageChoice);
      }
      if (hasGenre && hasLanguage) return true;
      return false;
    })

    // TODO make it so it only saves 3 movies max
    const copyState = {...this.state};
    copyState.movieSuggestionResult = movieSuggestionResult;
    this.setState(copyState);
  }

  render() {
    return (
      <div id="suggestMovies" className="overlay">
        <div className="closebtn" onClick={() => this.props.closeBtn()}></div>

        <form onSubmit={this.submitQuery}>

          <select id="genre-choice">
            <option defaultValue>nvt</option>
            {this.state.Genres
              .map(genre => 
                <option key={genre} value={genre}>{genre}</option>
                )
              }
          </select>
          <select id="year-choice">
            <option defaultValue>nvt</option>
            {this.state.ReleasedYears
              .map(year => 
                <option key={year} value={year}>{year}</option>
                )
              }
          </select>
          <select id="language-choice">
            <option defaultValue>nvt</option>
            {this.state.Languages
              .map(language => 
                <option key={language} value={language}>{language}</option>
                )
              }
          </select>
          <button type="submit">start</button>
        </form>
        
        {
          this.state.movieSuggestionResult.length !==0 ? this.state.movieSuggestionResult.map(movie => 
            <h2 id={movie.imdbID} className="overlay-content">{movie.Title}</h2>
          ) : <h2 id="empty" className="overlay-content">No match found</h2>
        }
      </div>
    );
  }  
}

export default SuggestionsQueryPanel;
