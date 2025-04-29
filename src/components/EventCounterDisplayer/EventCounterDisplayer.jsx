import React, { Component } from 'react'

export default class EventCounterDisplayer extends Component {
  render() {
     const {counter} = this.props;
    const evenCount = counter %2===0? counter: counter - 1;
    return (
      <h2> Event Counter Displayer: {evenCount}</h2>
    )
  }
}
