import React, { Component } from 'react'

export default class CounterDisplayer extends Component {

  render() {
    return (
      <>
        <h2>all Clicks Counter: {this.props.counter}</h2>
      </>
    )
  }
}
