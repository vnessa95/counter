import React, { Component } from "react";
class Counter extends Component {
    // INTALIZATION
    constructor(props) {
        super(props)
        console.log("constructor", props)
    }
    // MOUNTING
    render() {
        return (
            <div className="counter">
                Counter value: {this.props.counter}
            </div>
        );
    }
}

export default Counter