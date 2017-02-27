import React,{Component} from 'react';

export default class Card extends Component {
  
  constructor(props) {
    super();
    this.state = {
      swap: props.swap,
      char: props.char,
      index: props.index,
      checked: props.checked,
    }
  }

  render() {
    const className = "w3-col s1 w3-blue w3-center w3-card w3-padding-16 w3-margin";
    return (
      <div className={className}>
        <h2 onClick={() => { console.log('clicked');this.state.swap(this.state) }}>{this.state.char}</h2>
      </div>
    );
  }
}