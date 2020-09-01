import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: this.props.value };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    event.preventDefault();
    const input = this.state.input;
    if (input) {
      this.props.onKeyPress(input);
      this.setState({ input: '' });
    }
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleKeyPress}>
        <input value={this.state.input} onChange={this.handleChange} />
      </form>
    );
  }
}

export default Input;
