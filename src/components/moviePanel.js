import React from 'react';
import './moviePanel.css';

import CustomButton from './customElements/customButton'

class MoviePanel extends React.Component {
  constructor(props) {
    super(props);

    
    const poster = props.movie.Poster === "N/A" ? props.movie.Poster : "./resources/empty_image.png"
    console.log(poster)

    this.state = {
      poster: props.movie.Poster,
      title: props.movie.Title,
      type: props.movie.Type,
      year: props.movie.Year,
      id: props.movie.imdbID
    };
  }

  render() {
    return (
      <div className="owl-item">
        <img src={this.state.poster} alt={this.state.title}></img>
        <div className="title-wrapper"> 
          <h4> {this.state.title + ' - (' + this.state.year + ')'} </h4> 
          <p> {this.state.type} </p> 
        </div>
        <CustomButton title="Add to my list" onClickBtn={(e) => {this.props.addToSelectedMovies(this.state.id, e)}}></CustomButton>
      </div>
    );
  }  
}

export default MoviePanel;
