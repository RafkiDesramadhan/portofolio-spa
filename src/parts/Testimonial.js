import React from "react";

export default function Testimonial() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide mt-5"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <h1 className="outline_text text-center">Testimonial</h1>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div>
            <div className="container p-5">
              <div className="row">
                <div className="col-12 col-md-6 offset-md-3 text-center">
                  <img
                    src="images/people4.jpg"
                    alt="picture"
                    className="img-fluid img-thumbnail rounded-circle"
                    style={{ height: 150, width: 150 }}
                  />
                  <p className="text-testimonial mb-5">
                    Innovative brewing methods and our cofeee is sourced from
                    various parts of the globe and are roasted to perfection.
                  </p>
                  <p className="text-primary mb-0 text-name-testimonial">
                    Mesica Chouhan
                  </p>
                  <p className="lead text-name-two-testimonial">
                    Mesica Chouhan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div>
            <div className="container p-5">
              <div className="row">
                <div className="col-12 col-md-6 offset-md-3 text-center">
                  <img
                    src="images/people10.jpg"
                    alt="picture"
                    className="img-fluid img-thumbnail rounded-circle"
                    style={{ height: 150, width: 150 }}
                  />
                  <p className="text-testimonial mb-5">
                    Innovative brewing methods and our cofeee is sourced from
                    various parts of the globe and are roasted to perfection.
                  </p>
                  <p className="text-primary mb-0 text-name-testimonial">
                    Mesica Chouhan
                  </p>
                  <p className="lead text-name-two-testimonial">
                    Mesica Chouhan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div>
            <div className="container p-5">
              <div className="row">
                <div className="col-12 col-md-6 offset-md-3 text-center">
                  <img
                    src="images/people11.jpg"
                    alt="picture"
                    className="img-fluid img-thumbnail rounded-circle"
                    style={{ height: 150, width: 150 }}
                  />
                  <p className="text-testimonial mb-5">
                    Innovative brewing methods and our cofeee is sourced from
                    various parts of the globe and are roasted to perfection.
                  </p>
                  <p className="text-primary mb-0 text-name-testimonial">
                    Mesica Chouhan
                  </p>
                  <p className="lead text-name-two-testimonial">
                    Mesica Chouhan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-target="#carouselExampleIndicators"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-target="#carouselExampleIndicators"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}
