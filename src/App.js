import React from 'react';
import './App.css';
import searchImdb from './api/imdbAPI'

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {movieQuery: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({movieQuery: event.target.value});
  }

  handleSubmit(event) {
    searchImdb(this.state.movieQuery)
      .then(results => {
        console.log(results);
      })
    event.preventDefault();
  }
  
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.movieQuery} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        
      </div>
    );
  }  
}

export default App;
