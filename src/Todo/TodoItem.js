import React from 'react';
import deleteIcon from './delete.svg';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDeleteIconVisible: this.props.isDeleteIconVisible };
    this.handleClick = this.handleClick.bind(this);
    this.delete = this.delete.bind(this);
    this.showDeleteIcon = this.showDeleteIcon.bind(this);
    this.hideDeleteIcon = this.hideDeleteIcon.bind(this);
  }

  handleClick(event) {
    this.props.onClick(event.target.id);
  }

  delete(id) {
    this.props.delete(id);
  }

  showDeleteIcon() {
    this.setState({ isDeleteIconVisible: true });
  }

  hideDeleteIcon() {
    this.setState({ isDeleteIconVisible: false });
  }

  render() {
    const { id, text, status } = this.props.todo;
    const deleteElement = this.state.isDeleteIconVisible ? (
      <img
        src={deleteIcon}
        alt='delete icon'
        onClick={() => {
          this.delete(id);
        }}
      />
    ) : (
      ''
    );
    const classes = `task ${status}`;
    return (
      <div
        className={classes}
        onMouseOver={this.showDeleteIcon}
        onMouseLeave={this.hideDeleteIcon}
      >
        <div className='indicator'></div>
        <span className='todoText' id={id} onClick={this.handleClick}>
          {text}
        </span>
        {deleteElement}
      </div>
    );
  }
}

export default TodoItem;
