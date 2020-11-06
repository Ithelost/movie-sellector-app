import React from 'react';
import './moviePanel.css';

class MoviePanel extends React.Component {
  constructor(props) {
    super(props);

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
        <h4> {this.state.title} </h4>
        <div className="submit-wrapper"> <p onClick={() => {this.props.addToSelectedMovies(this.state.id)}}>Add to my list</p> </div>
      </div>
    );
  }  
}

export default MoviePanel;
