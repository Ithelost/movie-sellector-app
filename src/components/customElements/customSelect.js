import React from 'react';

class CustomSelect extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.elements.map(element => <p>{element}</p>)
        }
      </div>
    );
  }  
}