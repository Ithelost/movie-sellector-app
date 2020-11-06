import React from 'react';

class PersonalSelectedMovie extends React.Component {

  render() {
    return (
      <div className="span-2">
        <h6 key={this.props.movie.imdbID}>{this.props.movie.Title}</h6>
        <button onClick={(e) => this.props.removeSelectedMovie(this.props.movie.imdbID, e)}>Remove</button>
      </div>
    );
  }  
}

export default PersonalSelectedMovie;
