import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <div class="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters}
            </span>
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
