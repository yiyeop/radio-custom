import React, { Component } from "react";
import "./App.css";
import Radio from "./RadioGroup";

const sampleData = [
  { group: "A", name: "옵션1", price: 1000 },
  { group: "A", name: "옵션2", price: 500 }
];

const sampleData2 = [
  { group: "B", name: "옵션1", price: 1000 },
  { group: "B", name: "옵션2", price: 500 }
];

const sampleData3 = [
  { group: "C", name: "옵션1", price: 1000 },
  { group: "C", name: "옵션2", price: 500 }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Radio data={sampleData} />
        <p />
        <Radio data={sampleData2} background="green" />
        <p />
        <Radio
          data={sampleData3}
          textStyle={{ color: "blue" }}
          background="red"
        />
      </div>
    );
  }
}

export default App;
