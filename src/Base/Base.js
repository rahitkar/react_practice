import React from 'react';

const isValid = (number, base) => {
  const lastDigit = Number(number.slice(-1));
  return isNaN(parseInt(lastDigit, base));
};

const convertToDecimal = (number, base) => parseInt(number, base);

const convertToBase = (number, base) => +number.toString(base);

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const number = isValid(value, this.props.base)
      ? value
      : convertToDecimal(value, this.props.base);
    this.props.onChange(number);
  }

  render() {
    return (
      <div>
        <span>base {this.props.base}</span>
        <input
          onChange={this.handleChange}
          value={convertToBase(this.props.number, this.props.base)}
        ></input>
      </div>
    );
  }
}

class Bases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(number) {
    this.setState({ number });
  }

  getBases() {
    return [2, 8, 10].map((base, index) => (
      <Base
        onChange={this.handleChange}
        base={base}
        number={this.state.number}
        key={index}
      />
    ));
  }

  render() {
    const bases = this.getBases();
    return <div>{bases}</div>;
  }
}

export default Bases;
