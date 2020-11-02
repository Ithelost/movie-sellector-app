// import React from 'react';

// class MoviePanel extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       title: props.l,
//       actors: props.s,
//       year: props.y
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({movieQuery: event.target.value});
//   }

//   handleSubmit(event) {
//   }
  
//   render() {
//     return (
//       <div className="MoviePanel">
//         <form onSubmit={this.handleSubmit}>
//           <label>
//               Name:
//               <input type="text" value={this.state.movieQuery} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>

//       </div>
//     );
//   }  
// }

// export default MoviePanel;
