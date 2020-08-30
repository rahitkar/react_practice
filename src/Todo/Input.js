import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  handleKeyPress(event) {
    if (event.charCode === 13) {
      this.props.onKeyPress(event.target.value);
    }
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }
  
  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      ></input>
    );
  }
}

export default Input;