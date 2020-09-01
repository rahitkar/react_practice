import React from 'react';
import Input from './Input';

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  handleKeyPress(heading) {
    this.setState({ isClicked: false });
    this.props.replaceHeading(heading);
  }

  render() {
    let content = <h1 onClick={this.handleClick}>{this.props.heading}</h1>;

    if (this.state.isClicked) {
      content = (
        <Input value={this.props.heading} onKeyPress={this.handleKeyPress} />
      );
    }
    return content;
  }
}

export default Heading;
