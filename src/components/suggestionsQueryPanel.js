import React from 'react';
import './suggestionsQueryPanel.css'

import CustomSelect from './customElements/customSelect'

class SuggestionsQueryPanel extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      Genres: [],
      Languages: [],
      Types: [],
      maxRuntimeLenght: 1,
      movieSuggestionResult: []
    };
    
    var self = this;
    window.onload = function() {
      const el = document.getElementById("suggestMovies")
      const runtimeSlider = document.getElementById("runtimeSlider")
      const bubble = document.getElementById("runtimeSliderBubble")
      
      //TODO fix this so it doesn't trigger on transition but on button click
      if (el) el.addEventListener("transitionrun", () => {
        self.updateState();
        self.setRuntimeBubble(runtimeSlider, bubble)
      });

      if (runtimeSlider && bubble) runtimeSlider.addEventListener("input", () => self.setRuntimeBubble(runtimeSlider, bubble))

    }
  }

  updateState = () => {
    console.log('update state has been called');

    var copyState = {...this.state};
    const movieList = this.props.selectedMovies;
    if (movieList === []) return;

    for (var i = 0; i < Object.keys(movieList).length; i++){
      movieList[i].Genre.split(", ").map(genre => {
        if (!copyState.Genres.includes(genre) && genre !== "N/A") copyState.Genres.push(genre);
        return genre;
      })
      const languages = movieList[i].Language;
      languages.split(", ").map(language => {
        if (!copyState.Languages.includes(language) && language !== "N/A") copyState.Languages.push(language);
        return language;
      })

      const movieType = movieList[i].Type;
      if (!copyState.Types.includes(movieType) && movieType !== "N/A") copyState.Types.push(movieType);
    
      const runTime = parseInt(movieList[i].Runtime, 10);
      if (copyState.maxRuntimeLenght < runTime && movieType !== "N/A") copyState.maxRuntimeLenght = runTime;
    }
    this.setState(copyState);
  }

  setRuntimeBubble = (slider, bubble) => {
    const val = slider.value;
    const min = slider.min ? slider.min : 0;
    const max = slider.max ? slider.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;
  
    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  }

  submitQuery = (event) => {
    console.log("sumbit query")

    var genreChoices = [];
    var checkboxes = document.querySelectorAll('input[name="genre"]');
    for (var checkbox of checkboxes) {
      if (checkbox.checked) genreChoices.push(checkbox.value);
    }
    const languageChoice = document.querySelector('input[name="languages"]:checked').value
    const typeChoice = document.querySelector('input[name="type"]:checked').value
    const runtimeChoice = document.getElementById("runtimeSlider").value
    
    const movieList = this.props.selectedMovies;

    const movieSuggestionResult = movieList.map(movie => {
      var moviePercentage = 0;
      
      var addPercentage = this.calculatePercentageAdded(genreChoices, languageChoice, typeChoice);

      if (genreChoices !== [] && movie.Genre !== "N/A") {
        moviePercentage += genreChoices.every(genreChoice => {
          return movie.Genre.split(", ").includes(genreChoice)
        }) ? addPercentage : 0;
      }

      if (languageChoice !== "N/A" && movie.Language !== "N/A") {
        moviePercentage += movie.Language.split(", ").includes(languageChoice) ? addPercentage : 0;
      } 
      if (typeChoice !== "N/A" && movie.Type !== "N/A") moviePercentage += movie.Type === typeChoice ? addPercentage : 0    
      if (movie.Runtime !== "N/A") moviePercentage += parseInt(movie.Runtime, 10) <= runtimeChoice ? addPercentage : 0
      
      return { movie: movie, percentage: moviePercentage }
    })

    movieSuggestionResult.sort((a, b) => b.percentage - a.percentage);
    const copyState = {...this.state};
    movieSuggestionResult.length = movieSuggestionResult.length < 5 ? movieSuggestionResult.length : 5
    
    copyState.movieSuggestionResult = movieSuggestionResult;
    this.setState(copyState);
  }

  calculatePercentageAdded(gengreChoice, languageChoice, typeChoice) {
    var selectedChoices = 0;

    if (gengreChoice !== ["N/A"]) selectedChoices += 1
    if (languageChoice !== "N/A") selectedChoices += 1
    if (typeChoice !== "N/A") selectedChoices += 1

    if (selectedChoices === 3) return 25;
    else if (selectedChoices === 2) return 33;
    else if (selectedChoices === 1) return 50;
    else return 100;
  }

  render() {
    return (
      <div id="suggestMovies" className="overlay">
        <div className="closebtn" onClick={() => this.props.closeBtn()}></div>

        <form className="query-form" onChange={this.submitQuery}>
          <div>
            Genre:
            <div id="genre-selector">
              {
                this.state.Genres.map(element => {
                  return (
                    <div key={element}>
                      <input type="checkbox" name="genre" id={element} value={element}></input>
                      <label name="genre">{element}</label>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div>
            Language:
            <CustomSelect elements={this.state.Languages} groupName="languages"></CustomSelect>
          </div>
          <div>
            Type:
            <CustomSelect elements={this.state.Types} groupName="type"></CustomSelect>
          </div>
          <div className="slider-wrapper">
            maximum lenght in minutes:
            <input type="range" min="1" max={this.state.maxRuntimeLenght} className="slider" id="runtimeSlider" defaultValue={this.state.maxRuntimeLenght}></input>
            <output className="runtimeSliderBubble" id="runtimeSliderBubble"></output>
          </div>
        </form>
        
        {
          this.state.movieSuggestionResult.length !==0 ? this.state.movieSuggestionResult.map(suggestion => 
            <h2 key={suggestion.movie.imdbID} className="overlay-content">{suggestion.movie.Title + " - " + suggestion.percentage + "%"}</h2>
          ) : <h2 id="empty" className="overlay-content">No match found</h2>
        }
      </div>
    );
  }  
}

export default SuggestionsQueryPanel;
