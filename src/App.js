import React, { Component } from 'react';
import Counter from "./Components/Counter/counter";
import './App.css'
class App extends Component {
  //INTALIZATION
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCounter = () => {
    let currentCountValue = this.state.counter;
    this.setState({
      counter: ++currentCountValue
    })
  }

  // Mounting
    componentDidMount() {
      console.log("componentDidMount Fired")
    }

    //Updating
    componentDidUpdate(prevProps, prevState) {
      console.log(prevState, prevProps)
    }
    //UNMOUNTING
    componentWillMount() {
      console.log("component will unmount")
    }


  // MOUNTING & UPDATING
  render() {
    return (
      <div className="main--container">
        <div className="counter--border">
          <div className="counter--container">
            <Counter counter={this.state.counter} />
            <button onClick={this.incrementCounter}>Click Me!</button>
          </div>
        </div>
        <div className="sih--div--left"></div>
        <div className="sih--div--right"></div>
      </div>
    );
  }
}
export default App;
