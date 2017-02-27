import React,{Component} from 'react';

export default class Card extends Component {
  
  constructor(props) {
    super();

    this.state = {
      checkedClass: this.getClassName(props.checked),
    }
  }

  getClassName(checked) {
    return checked? 'w3-green': 'w3-blue';
  }

  componentWillReceiveProps(newProps) {
    console.log("newProps", newProps);
    console.log("checkedClass", this.state.checkedClass);
    this.setState({checkedClass: this.getClassName(newProps.checked)})
  }

  render() {
    return (
      <div className={`w3-col s2 ${this.state.checkedClass} w3-center w3-card w3-padding-16 w3-margin`}>
        <h1
        className="w3-padding-32"
        onClick={() => { console.log('clicked');this.props.swap(this.props) }}>
        {this.props.char}
        </h1>
      </div>
    );
  }
}