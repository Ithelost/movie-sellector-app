import React from 'react';

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
      <div className="center">
        <h4> {this.state.title} </h4>
        <button onClick={() => {this.props.addToSelectedMovies(this.state.id)}}>submit</button>
      </div>
    );
  }  
}

export default MoviePanel;
