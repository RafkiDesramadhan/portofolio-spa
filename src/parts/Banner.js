import React from "react";
import { Fade } from "react-reveal";

export default function Banner() {
  return (
    <section>
      <div className="bg-custom text-center py-md-5 d-flex align-items-center justify-content-center height-custom">
        <div className="w-75">
          <Fade bottom cascade>
            <h4 className="text-primary h2 mb-4 mb-md-5 text-custom">
              Hello Everyone
            </h4>
            <h1 className="text-white text-banner">
              World class consumer and trends research capabilities we design
              for tomorrow customers in tomorrow’s markets.
            </h1>
          </Fade>
        </div>
      </div>
    </section>
  );
}
