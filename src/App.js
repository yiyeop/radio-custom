import React, { Component } from "react";
import "./App.css";
import Radio from "./RadioGroup";

class App extends Component {
  render() {
    const sampleOptions = {
      name: "사이즈 선택",
      radio: true,
      option: [
        { label: "소", value: 0, default: true },
        { label: "중", value: 1500 },
        { label: "대", value: 3000 }
      ]
    };

    return (
      <div className="App">
        <Radio options={sampleOptions} />
      </div>
    );
  }
}

export default App;
