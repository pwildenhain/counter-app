import React from "react";

const NavBar = ({ totalNonZeroCounters }) => {
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
