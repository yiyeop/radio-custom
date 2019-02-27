import React, { Component } from "react";
import styled from "styled-components";

const ItemDiv = styled.div`
  display: flex;
  &:hover {
    background: #efefef;
  }
  align-items: center;
  justify-content: space-between;
  margin: 0.2rem 0.2rem;
`;

const Svg = styled.div`
  position: relative;
  display: block;
  top: 3.7px;
  left: -1.2rem;
  color: white;
  width: 5px;
`;

const Radio = styled.input`
  all: unset;
  border: none;
  background: none;
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 3px;
  border: 3px solid #dfdfdf;
  transition: all 0.2s ease-in-out;
  &:checked {
    border: 3px solid ${props => props.background};
    background-color: ${props => props.background};
  }
  &:hover:active {
    border-color: ${props => props.background};
  }
`;

const Item = ({
  data,
  index,
  onClick,
  checked,
  textStyle,
  background,
  menuId
}) => {
  return (
    <ItemDiv
      onClick={() => {
        onClick(index, data, menuId);
      }}
    >
      <div
        style={{
          display: "flex"
        }}
      >
        <Radio
          type="radio"
          name={data.group}
          value={data.name}
          checked={checked}
          background={background}
          onChange={() => {}}
        />
        <Svg>
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" />
            </svg>
          )}
        </Svg>
        <div style={textStyle}>{data.name}</div>
      </div>
      <div>{data.price}</div>
    </ItemDiv>
  );
};

class RadioTest extends Component {
  state = {
    checked: 0
  };

  onClick = (index, data) => {
    this.setState({
      checked: index
    });
    console.log(data);
  };

  render() {
    const { data } = this.props;
    return (
      <>
        {data &&
          data.map((option, index) => (
            <Item
              key={index}
              data={option}
              index={index}
              onClick={this.onClick}
              checked={this.state.checked === index && true}
              textStyle={this.props.textStyle}
              background={this.props.background || "blue"}
            />
          ))}
      </>
    );
  }
}

export default RadioTest;
