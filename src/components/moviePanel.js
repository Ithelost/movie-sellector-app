import React from 'react';

class MoviePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.movie.l,
      actors: props.movie.s,
      year: props.movie.y
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({movieQuery: event.target.value});
  }

  handleSubmit(event) {
  }
  
  render() {
    return (
      <div className="MoviePanel">
        <form onSubmit={this.handleSubmit}>
          <h4> {this.state.title} </h4>
          <h4> {this.state.actors} </h4>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }  
}

export default MoviePanel;
