import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // We can directly call the Counter Component
  // because it also just returns jsx
  // If we wanted to write a more complex jsx inside of <Counter><Counter/>
  // then we could take advantadge of the "this.props.children" react element
  // Which would return all the child elements from <Counter>
  // Instead of passing every single piece of state to an individual property,
  // we can just pass the entire counter as it's own attribute! This is equivalent
  // to id={counter.id} value={counter.value}, but it's more concise, and more
  // flexible
  render() {
    // Lifecycle hook example
    console.log("Counters Rendered");
    // Use object destructuring so we don't have to repeat ourselves
    // with this.props
    const { counters, onReset, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
