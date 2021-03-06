import React, { Component } from 'react'

export default class Card extends Component {

  static getClassName(checked) {
    return checked ? 'w3-green' : 'w3-blue'
  }
  constructor(props) {
    super()

    this.state = {
      checkedClass: Card.getClassName(props.checked),
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ checkedClass: Card.getClassName(newProps.checked) })
  }

  render() {
    return (
      <div className={`w3-col s2 ${this.state.checkedClass} w3-center w3-card w3-padding-16 w3-margin`}>
        <h1
          className="w3-padding-32"
          onClick={() => { this.props.swap(this.props) }}
        >
          {this.props.char}
        </h1>
      </div>
    )
  }
}

Card.propTypes = {
  checked: React.PropTypes.bool.isRequired,
  char: React.PropTypes.string.isRequired,
  swap: React.PropTypes.func.isRequired,
}
