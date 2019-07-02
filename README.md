
#### Usage

```js
const sampleData = [
  { group: "A", name: "옵션1", price: 1000 },
  { group: "A", name: "옵션2", price: 500 }
];

<Radio data={sampleData} textStyle={{ color: "blue" }} background="red" />;

// class component에서 이부분 콘솔 수정하여 사용
onClick = (index, data) => {
    this.setState({
      checked: index
    });
    console.log(data);
  };
```
