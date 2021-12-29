import React, { Component } from "react";

import Navbar from "../parts/Navbar";
import Banner from "../parts/Banner";
import Mostpicked from "../parts/Mostpicked";
import Services from "../parts/Services";
import Testimonial from "../parts/Testimonial";
import StartTalking from "../parts/StartTalking";
import Footer from "../parts/Footer";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <Mostpicked />
        <Services />
        <Testimonial />
        <StartTalking />
        <Footer />
      </>
    );
  }
}
