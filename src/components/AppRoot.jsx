import React, { Component } from 'react';

class AppRoot extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      shuffled: [],
      pair: []
    }
    this.swap = this.swap.bind(this);
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
            <Cards key={index} index={index} char={item} swap={this.swap} /> )}
        </div>
      </div>
    );
  }
}


const Cards = (props) => 
  <div className="w3-col s1 w3-blue w3-center w3-card w3-padding-16 w3-margin">
    <h2 onClick={() => { props.swap(props) }}>{props.char}</h2>
  </div>


export default AppRoot;