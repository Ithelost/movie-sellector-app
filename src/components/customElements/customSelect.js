import React from 'react';

class CustomSelect extends React.Component {
  render() {
    return (
      <div>
        <input type="radio" name={this.props.groupName} id={this.props.groupName} value="N/A" hidden defaultChecked></input>
        {
          this.props.elements.map(element => {
            return (
              <div key={element}>
                <input type="radio" name={this.props.groupName} id={element} value={element}></input>
                <label name={this.props.groupName}>{element}</label>
              </div>
            )
          })
        }
      </div>
    );
  }  
}

export default CustomSelect;