import React from "react";
import Button from "../elements/Button";

export default function StartTalking() {
  return (
    <section className="bg-primary">
      <div className="container">
        <div
          className="row bg-primary py-5 align-items-center"
          style={{ height: 400 }}
        >
          <div className="col text-center text-white">
            <h1 className="mb-5" style={{ fontSize: 56 }}>
              Let's start your project with us
            </h1>
            <Button
              href="/talking"
              type="link"
              btn
              isOutlineLight
              className="px-5 py-3"
            >
              Start Talking
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
