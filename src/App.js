import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  // Remember, we can only share data with child components, if we want to allow the virtual
  // DOM to compare itself to the Old virtual DOM to determine if it needs to update
  // the real DOM. So since we want our navbar to
  // display a count of the counters, we need to move that data from the
  // Counters component, to the App component
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  // Lifecycle hook
  constructor() {
    super();
    console.log("App Constructed");
    // Can set the state at the point of construction
    // for example if we're inheriting properties from
    // another component
  }

  // Lifecycle hook
  componentDidMount() {
    console.log("App Mounted");
    // Can take the opportunity here to grab
    // data from a server, and pass it to
    // this.state
  }
  // stole this from the counter component to bring it over to the
  // counters component
  // Then stole EVERYTHING from Counters to App, since we want to
  // pass data to the NavBar -- ANYTHING that is going modify the data
  // in addition to the data itself, needs to live in parent components
  // and then be passed on in the properties of child components
  // controlled component means that it doesn't get to have it's own
  // local state
  handleIncrement = counter => {
    // Create a clone of our current state bc we never want to
    // directly modify the state in React (Virtual DOM vs Real DOM)
    const counters = [...this.state.counters];
    // Figure out which one is being incremented
    const index = counters.indexOf(counter);
    // Increment the value
    counters[index].value++;
    // Recalculate the current state
    this.setState({ counters });
  };

  // Since this is the component that owns the counter, it
  // should be the one modifying it, AKA deleting it
  // We'll pass this as a property of the Counter.
  // It's cool that you can pass functions as properties,
  // as well as values. guess that means you can pass anything
  // we won't update the state directly, we'll create a new list of
  // counters without the existing one, and then we'll use the setState method
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  // The covention for a main page is the <main> jsx tag, with the container class
  // Lifecycle hook
  render() {
    // When the app is rendered, it's children get rendered recursively
    // THEN it mounts the component, and prepares it to receive data
    // from any outside sources
    console.log("App Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalNonZeroCounters={
            this.state.counters.filter(c => c.value !== 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
