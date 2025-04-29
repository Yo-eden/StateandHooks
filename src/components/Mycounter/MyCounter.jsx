import React, { Component } from 'react'
import CounterDisplayer from '../CounterDidsplayer/CounterDisplayer';
import EventCounterDisplayer from '../EventCounterDisplayer/EventCounterDisplayer';

export default class MyCounter extends Component {
    constructor(props){
        super(props);
        this.state={
          counter:0, 
        };
        
    }
    allClicksCounter= () => {
      this.setState((prevState) =>({
        counter:prevState.counter +1,
      }))
    };
  render() {
    return (
      <div>
        <button onClick= {this.allClicksCounter}>click </button>
        <CounterDisplayer counter={
          this.state.counter}/>
          <EventCounterDisplayer counter = {this.state.counter}/>
      </div>
    )
  }
}
