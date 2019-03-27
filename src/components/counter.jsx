// Need to import React, because it gets used by
// React.createElement() when we render our jsx
import React, { Component } from "react";

class Counter extends Component {
  // state object includes any data that
  // the component is going to need
  // its a special propert of React Component
  // Since this is a controlled component, meaning it's wholly controlled by our
  // counters component, it can't have it's local state, or else there isn't
  // a single source of truth. Instead, all the data that this component
  // needs should be passed through the this.props, and raise events
  // back to the controlling component to update the state their
  //state = {
  // Since we expect a property called value to get passed to a
  // counter by our Counters component, we dynamically set the
  // value of any given counter, to the counters obj in the state
  // of Counters
  // Difference between props and state
  // props is data that is passed to, and can be pass from a component
  // state is local or private data to that component
  // props is read-only. Cannot change of props of an existing component
  // but we can read and setState
  //value: this.props.counter.value
  //};

  //   constructor() {
  //     // Have to call super first since we are extending the component class
  //     super();
  //     // Overwrite our handler here, so when the class is first constructed
  //     // we have access to "this" inside of our handler
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // Or we could use an arrow function instead, because they don't
  // rebind this, they inherit it
  // stole this from the counter component to bring it over to the
  // counters component
  //handleIncrement = () => {
  // setState has to be used for React, so it knows to sync the virtual DOM
  // with the DOM
  // setState is inherited from Component
  // setState can merge or overwrite with the original state
  //this.setState({ value: this.state.value + 1 });
  //};

  // We can use this to conditionally decide if we want to
  // make a call to the server to get new data, by comparing prevProps/State
  // to current props/state
  // else don't call the server if the props/state didn't change
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  // Use this as an opportunity to take care of anything in the environment
  // that is attached to this component, to make sure we don't have any
  // memory leaks -- i.e listening for something that no longer exists
  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    // life cycle hook reminder
    console.log("Counter Rendered");
    // Remember, this is jsx, not a string
    // Use a div, to return jsx expressions,
    // since React.createElement, expects just one
    // type of HTML element

    // We can have dynamic classes for our jsx expressions, need to use let
    // keyword since we want to update the variable, depending on the state
    // of count
    // Abstract logic so we don't have a bloated render() method
    return (
      // We can use React.Fragment to return multiple jsx expressions
      // rather than creating an extra div just for the sake of React.createElement
      // Can render something dynamically by adding {} inside the jsx expression
      // where we can put an valid js code
      // <span> tag is used to modify in line HTML elements
      // Use className instead of class inside of <span> because this get compiled
      // by React.createElement, and class is a reserved keyword
      // className is where we apply CSS classes, from bootstrap
      // you can also use "style" inside jsx, but it is reccommended to use className
      // If we want to render a list dynamically, we can use the map method on an array
      // BUT we need to make sure each item in that list has a unique key
      // so react can quickly convert the virtual DOM into the real DOM
      // If we want to pass parameter from a parent function into a child component
      // we have to use an arrow function so that we don't rebind this to the child
      // component, but inherit it from the parent component
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
      // The prettier extension automatically wraps the jsx expression in parentheses
      // and adds the semicolon at the end
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // color it with warning color if it's zero, else the primary color
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // Use object destructuring
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

// I like have exports at the end, it feels more
// explicit, and readable
export default Counter;
