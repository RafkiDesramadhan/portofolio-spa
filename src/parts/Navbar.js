import React from "react";
import Button from "../elements/Button";
import { Fade } from "react-reveal";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
      <div className="container mt-4">
        <Fade>
          <Button className="navbar-brand" type="link" href="/">
            <b>RADAR BLOG</b>
          </Button>
        </Fade>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active mr-4">
              <Fade>
                <Button
                  type="link"
                  className="nav-link text-white"
                  href="/home"
                >
                  Home
                </Button>
              </Fade>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
