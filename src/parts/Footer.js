import React from "react";
import Button from "../elements/Button";
import { Bounce, Fade } from "react-reveal";

export default function Footer() {
  return (
    <Bounce bottom>
      <footer className="bg-custom">
        <Fade duration={5000}>
          <div className="container py-5">
            <div className="row text-white">
              <div className="col-2 col-md">
                <p>
                  <b>RADAR BLOG</b>
                </p>
              </div>
              <div className="col-3">
                <ul>
                  <li>
                    <b>Services</b>
                  </li>
                  <li>
                    <Button
                      type="link"
                      className="text-white"
                      href="/service/web-desgin"
                    >
                      Web Design
                    </Button>
                  </li>
                  <li>
                    <Button
                      type="link"
                      className="text-white"
                      href="/service/3d-modeling"
                    >
                      3D Modeling
                    </Button>
                  </li>
                  <li>
                    <Button
                      type="link"
                      className="text-white"
                      href="/service/architectural-desgin"
                    >
                      Architectural Desgin
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <ul>
                  <li>
                    <b>Useful Links</b>
                  </li>
                  <li>
                    <Button
                      type="link"
                      className="text-white"
                      href="/service/work"
                    >
                      Work
                    </Button>
                  </li>
                  <li>
                    <Button
                      type="link"
                      className="text-white"
                      href="/service/about"
                    >
                      About
                    </Button>
                  </li>
                  <li>
                    <Button
                      type="link"
                      className="text-white"
                      href="/service/services"
                    >
                      Services
                    </Button>
                  </li>
                  <li>
                    <Button
                      type="link"
                      className="text-white"
                      href="/service/contact"
                    >
                      Contact
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <ul>
                  <li>
                    <b>Follow Us</b>
                  </li>
                  <li>
                    <Button
                      type="link"
                      className="text-white"
                      href="/service/dribble"
                      target="_blank"
                    >
                      Dribble
                    </Button>
                  </li>
                  <li>
                    <Button
                      type="link"
                      className="text-white"
                      href="/service/behance"
                      target="_blank"
                    >
                      Behance
                    </Button>
                  </li>
                  <li>
                    <Button
                      type="link"
                      className="text-white"
                      href="/service/instagram"
                      target="_blank"
                    >
                      Instagram
                    </Button>
                  </li>
                  <li>
                    <Button
                      type="link"
                      className="text-white"
                      href="/service/facebook"
                      target="_blank"
                    >
                      Facebook
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col text-center text-white">
                Copyright &copy;2021 All rights reserved
              </div>
            </div>
          </div>
        </Fade>
      </footer>
    </Bounce>
  );
}
