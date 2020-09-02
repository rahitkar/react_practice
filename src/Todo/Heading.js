import React from 'react';
import Input from './Input';
import DeleteIcon from './DeleteIcon';

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editable: false, isDeleteIconVisible: false };
    this.editHeader = this.editHeader.bind(this);
    this.updateHeading = this.updateHeading.bind(this);
    this.showDeleteIcon = this.showDeleteIcon.bind(this);
    this.hideDeleteIcon = this.hideDeleteIcon.bind(this);
  }

  editHeader() {
    this.setState({ editable: true });
  }

  updateHeading(heading) {
    this.setState({ editable: false });
    this.props.updateHeading(heading);
  }

  showDeleteIcon() {
    this.setState({ isDeleteIconVisible: true });
  }

  hideDeleteIcon() {
    this.setState({ isDeleteIconVisible: false });
  }

  render() {
    const deleteIcon = this.state.isDeleteIconVisible ? (
      <DeleteIcon delete={this.props.deleteTodo} />
    ) : (
      ''
    );
    let content = (
      <div onMouseOver={this.showDeleteIcon} onMouseLeave={this.hideDeleteIcon} className="task">
        <h1 onClick={this.editHeader}>{this.props.heading}</h1>
        {deleteIcon}
      </div>
    );

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
