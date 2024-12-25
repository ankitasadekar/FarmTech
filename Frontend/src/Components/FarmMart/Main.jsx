import React from "react";
import "./CSS/Main.css";
export default function Main() {
  return (
    <div>
      <nav className="navbar  ">
        <div className="container-fluid">
          <a className="navbar-brand">FarmMart</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
