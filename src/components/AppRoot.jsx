import React, { Component } from 'react';
import Card from './card/card.jsx';

class AppRoot extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      shuffled: [],
      pair: [],
      validate: [],
      checked: false
    }
    this.update = this.update.bind(this);
    this.swap = this.swap.bind(this);
    this.mark = this.mark.bind(this);

  }
  update(e){
    let shuffled_arr = ((input) => {
      for (let i = input.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [input[i - 1], input[j]] = [input[j], input[i - 1]];
      }
      return input;
    })(Array.from(e.target.value));

    this.setState({input: e.target.value})
    this.setState({shuffled: shuffled_arr})

  }
  swap(c) {
    let pair = this.state.pair;
    let shuffled = this.state.shuffled
    pair.push(c.index);
    if(pair.length === 2) {
    ((index_arr) => {
        let tmp = shuffled[index_arr[0]]
        shuffled[index_arr[0]] = shuffled[index_arr[1]]
        shuffled[index_arr[1]] = tmp
      })(pair);
      pair = [];
    }
    this.setState({pair: pair})
    this.setState({shuffled: shuffled})
    this.mark();
  }
  mark(){
    let input = this.state.input
    let shuffled = this.state.shuffled
    let result = [];
    shuffled.forEach(((i, index) => {
        result.push(i === input[index])
    }));
    this.setState({validate: result})
  }
  render() {
    let items = this.state.shuffled     
    return (
      <div className="App w3-content">
        <div className="w3-row-padding">
          <div className="w3-green w3-container w3-third">
            <h1>Your word here:</h1>
          </div>
          <div className="w3-container w3-twothird">
            <input type="text"
              className="w3-input w3-margin-top	"
              onChange={this.update.bind(this)} />
          </div>
        </div>
        <div className="w3-continer">
          {items.map((item, index) =>
            <Card key={index} index={index} char={item} swap={this.swap} checked={this.state.validate[index]}/> )}
        </div>
        <div className="w3-continer w3-margin-top w3-row-padding">
          <button className="w3-button w3-block w3-red" onClick={this.mark.bind(this)}>Mark it</button>
        </div>
        <h1>{this.state.validate.toString()}</h1>
        <div><pre>{JSON.stringify(this.state, null, 2) }</pre></div>
      </div>
    );
  }
}
/*

const Cards = (props) => {
  const checked = props && props.checked;
  let className = "w3-col s1 w3-blue w3-center w3-card w3-padding-16 w3-margin";
  console.log(checked);
  if(checked) {
    className.replace('w3-blue', 'w3-green');
  }
  console.log(checked);
  console.log("props", props);

  return (<div className={className}>
    <h2 onClick={() => { props.swap(props) }}>{props.char}</h2>
  </div>);
}*/

export default AppRoot;