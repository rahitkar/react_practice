import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.charCode === 13) {
      this.props.onKeyPress(event.target.value);
      this.setState({ input: '' });
    }
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <input
        value={this.state.input}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      ></input>
    );
  }
}

export default Input;
