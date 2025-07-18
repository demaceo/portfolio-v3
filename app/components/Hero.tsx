import React from "react";

export default function Hero() {
  return (
    <section className="hero-section bg-primary text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-3">Welcome to My Portfolio</h1>
            <p className="lead mb-4">
              I'm a passionate developer creating amazing digital experiences.
            </p>
            <button className="btn btn-light btn-lg">Get to know me</button>
          </div>
          <div className="col-lg-6">
            <div className="hero-image text-center">
              <div
                className="bg-light rounded-circle mx-auto"
                style={{
                  width: "300px",
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="text-muted fs-1">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
