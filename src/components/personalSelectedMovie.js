import React from 'react';
import CustomButton from './button/customButton';
import './personalSelectedMovie.css';

class PersonalSelectedMovie extends React.Component {

  // TODO do some css
  
  render() {
    return (
      <div className="selected-movie-box">
        <h3 key={this.props.movie.imdbID}>{this.props.movie.Title + ' - (' + this.props.movie.Year + ')'  }</h3>
        <CustomButton title="Remove" onClickBtn={(e) => this.props.removeSelectedMovie(this.props.movie.imdbID, e)}></CustomButton>
        <CustomButton title="Info" onClickBtn={(e) => alert('function not implemented yet')}></CustomButton>
      </div>
    );
  }  
}

export default PersonalSelectedMovie;
