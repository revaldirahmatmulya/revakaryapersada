import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import heroMain from "../assets/hero-1.jpg";
import heroScnd from "../assets/hero-2.jpg";
import Typewriter from "typewriter-effect";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container-fluid " id="home">
        <div className="row">
          <div className="left-side col-lg-7 col-sm-12">
            <div className="home-main-text">
              <h1 className="text-start">
                CV. REVA KARYA <br />
                PERSADA
              </h1>
              <h4 className="text-start home-second-text ">
                Melayani Bidang
                <span className="type-text text-muted fw-bold">
                  <Typewriter
                    options={{
                      strings: ["Perencanaan", "Pengawasan"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h4>
              <Button
                variant="outline-secondary"
                className="mt-4 d-flex align-items-start btn-hero btn-lg btn-home"
              >
                <a
                  href="https://drive.google.com/file/d/1FfGW_eCrVCF6N7F14JGzQxaWrhzBfT6d/view?usp=sharing"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  className=" link-cv"
                >
                  Download CV
                </a>
              </Button>{" "}
            </div>
          </div>
          <div className="right-side col-lg-5 col-sm-12">
            <div className="frame ">
              <img className="img-main" src={heroMain} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
