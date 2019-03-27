//import React, { Component } from "react";
import React from "react";
// Got this bootstrap code from getbootstrap.com documentation
// Since this doesn't have a state, and doesn't have any helper
// methods, it doesn't even need to be a class, but rather
// can be converted into a stateless functional component
// shortcut "sfc"
// Only real difference is that we need to pass props as
// an argument, because this is only used for classes
// React will automatically pass the props at runtime

const NavBar = ({ totalNonZeroCounters }) => {
  // Note lifecycle hooks can only be used in class components
  // NOT stateless functional components
  console.log("NavBar Rendered");
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a href="example.com" className="navbar-brand">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalNonZeroCounters}
          </span>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;

// class NavBar extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <nav className="navbar navbar-light bg-light">
//           <a href="example.com" className="navbar-brand">
//             Navbar{" "}
//             <span className="badge badge-pill badge-secondary">
//               {this.props.totalNonZeroCounters}
//             </span>
//           </a>
//         </nav>
//       </React.Fragment>
//     );
//   }

//   getNumCounters() {
//     return this.props.counters.length;
//   }
// }

// export default NavBar;
