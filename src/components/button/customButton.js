import React from 'react';
import './customButton.css';

class CustomButton extends React.Component {
  render() {
    return (
      <div className="submit-wrapper">
        <p type={this.props.typeBtn} onClick={this.props.onClickBtn} >{this.props.title}</p>
      </div>
    );
  }  
}

export default CustomButton;