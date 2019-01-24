import React, { Component } from "react";

class Radio extends Component {
  handleSubmit = () => {
    console.log(this.state.data);
  };

  handleChange = (option, groupName) => {
    this.setState({
      data: {
        name: groupName,
        label: option.label,
        value: option.value
      }
    });
  };

  componentDidMount() {
    const { options } = this.props;
    const defaultOption = Array.from(options.option).filter(
      option => option.default
    )[0];

    this.setState({
      data: {
        name: options.name,
        value: defaultOption.value,
        label: defaultOption.label
      }
    });
  }

  render() {
    const { options } = this.props;
    return (
      <>
        <div>
          <div>{options.name}</div>
          {Array.from(options.option).map((option, index) => (
            <div
              key={index}
              onClick={this.handleChange.bind(this, option, options.name)}
            >
              <input
                type="radio"
                name={options.name}
                value={option.value}
                defaultChecked={option.default || false}
              />
              {option.label}
              {option.value}
            </div>
          ))}
        </div>
        <button onClick={this.handleSubmit}>확인</button>
      </>
    );
  }
}

export default Radio;
