import React, { Component } from 'react'
import Card from './card/card.jsx'

class AppRoot extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      shuffled: [],
      pair: [],
      validate: [],
      checked: false,
      notification: '',
    }
    this.update = this.update.bind(this)
    this.swap = this.swap.bind(this)
    this.checkPosition = this.checkPosition.bind(this)
    this.mark = this.mark.bind(this)
  }
  update(e) {
    const shuffledArray = ((input) => {
      const intputArray = input
      for (let i = intputArray.length; i; i -= 1) {
        const j = Math.floor(Math.random() * i);
        [intputArray[i - 1], intputArray[j]] = [intputArray[j], intputArray[i - 1]]
      }
      return intputArray
    })(Array.from(e.target.value))

    this.setState({ input: e.target.value })
    this.setState({ shuffled: shuffledArray })
    this.checkPosition(shuffledArray)
  }
  swap(c) {
    let pair = this.state.pair
    const shuffled = this.state.shuffled
    pair.push(c.index)
    if (pair.length === 2) {
      ((indexArray) => {
        const tmp = shuffled[indexArray[0]]
        shuffled[indexArray[0]] = shuffled[indexArray[1]]
        shuffled[indexArray[1]] = tmp
      })(pair)
      pair = []
    }
    this.setState({ pair })
    this.setState({ shuffled })
    this.checkPosition()
  }
  checkPosition(shuffled) {
    const input = this.state.input
    const shuffledArray = shuffled || this.state.shuffled
    const result = []
    shuffledArray.forEach(((i, index) => {
      result.push(i === input[index])
    }))
    this.setState({ validate: result })
    this.setState({ notification: '' })
  }
  mark() {
    if (!this.state.validate.includes(false)) {
      this.setState({ notification: 'Good job!' })
    } else {
      this.setState({ notification: 'Try again :)' })
    }
  }
  render() {
    const items = this.state.shuffled
    return (
      <div className="App w3-content w3-padding-128">
        <div className="w3-row-padding">
          <div className="w3-pink w3-container w3-third">
            <h1>Your word here:</h1>
          </div>
          <div className="w3-container w3-twothird">
            <input
              type="text"
              className="w3-input w3-margin-top"
              onChange={this.update}
            />
          </div>
        </div>
        <div className="w3-continer w3-padding-128">
          {items.map((item, index) =>
            <Card
              key={index} index={index} char={item}
              swap={this.swap}
              checked={this.state.validate[index]}
            />)}
        </div>
        <div className="w3-continer w3-margin-top w3-row-padding w3-padding-128">
          <button className="w3-button w3-block w3-teal" onClick={() => { this.checkPosition(items); this.mark() }} ><h2>Mark it</h2></button>
        </div>
        <div className="w3-continer w3-row-padding">
          <div className="w3-panel w3-center w3-red ">
            <h2>{this.state.notification}</h2>
          </div>
        </div>
      </div>
    )
  }
}


export default AppRoot
