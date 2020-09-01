import React from 'react';
import Input from './Input';

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editable: false };
    this.editHeader = this.editHeader.bind(this);
    this.updateHeading = this.updateHeading.bind(this);
  }

  editHeader() {
    this.setState({ editable: true });
  }

  updateHeading(heading) {
    this.setState({ editable: false });
    this.props.updateHeading(heading);
  }

  render() {
    let content = <h1 onClick={this.editHeader}>{this.props.heading}</h1>;

    if (this.state.editable) {
      content = (
        <Input
          className='edit-heading'
          value={this.props.heading}
          onKeyPress={this.updateHeading}
        />
      );
    }
    return content;
  }
}

export default Heading;
