import React from "react";
import { Bounce } from "react-reveal";

export default function Brand() {
  return (
    <section>
      <div className="container my-5">
        <Bounce left>
          <h1 className="outline_text text-center p-5">Services</h1>
        </Bounce>
        <div className="row">
          <div className="col-md-4">
            <Bounce left duration={1500}>
              <img src="images/1.svg" alt="logo" className="mb-4" />
              <h4>3D Modeling</h4>
              <p>
                A wonderful serenity has taken to the possession of my entire
                soul network infrastructure, including consolidation of
                established network designed and
              </p>
            </Bounce>
          </div>
          <div className="col-md-4">
            <Bounce left duration={2000}>
              <img src="images/2.svg" alt="logo" className="mb-4" />
              <h4>UI/UX Design</h4>
              <p>
                A wonderful serenity has taken to the possession of my entire
                soul network infrastructure, including consolidation of
                established network designed and
              </p>
            </Bounce>
          </div>
          <div className="col-md-4">
            <Bounce left duration={2500}>
              <img src="images/3.svg" alt="logo" className="mb-4" />
              <h4>Architectural Design</h4>
              <p>
                A wonderful serenity has taken to the possession of my entire
                soul network infrastructure, including consolidation of
                established network designed and
              </p>
            </Bounce>
          </div>
        </div>
      </div>
    </section>
  );
}
