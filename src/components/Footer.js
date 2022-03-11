import React from "react";
import "./Footer.css";
import wa from "../assets/icons8_whatsapp.svg";
import ig from "../assets/icons8_Instagram.svg";

import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
const Footer = () => {
  return (
    <div>
      <div className="footer-wrap ">
        <div className="container footer-content text-start">
          <div className="row mb-5 justify-content-between">
            <div className="col-lg-3 col-sm-12">
              <h3 className="footer-title">CV. Reva Karya Persada</h3>
              <p className="text-muted cv-text">
                Spesialis Konsultan dan Pengawasan Pembangunan
              </p>
              <h3 className="footer-title">Connect with us</h3>
              <div className="social-media-group">
                <div className="wa-wrapper">
                  <a href="" className="d-flex justify-content-center">
                    <img src={wa} alt="" className="wa-img" />
                  </a>
                </div>
                <div className="ig-wrapper ">
                  <a href="" className="d-flex justify-content-center">
                    <img src={ig} alt="" className="ig-img" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-sm-12">
              <h3 className="footer-title">Navigasi</h3>
              <ul className="text-muted list-unstyled">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 contact-footer col-sm-12">
              <h3 className="footer-title">Ingin hubungi kami ?</h3>
              <ul className="list-unstyled " style={{ marginTop: "20px" }}>
                <li className="telp">
                  <FiPhone size="30px" />
                  <p className="phone-num ">&nbsp;&nbsp;&nbsp;08123456789</p>
                </li>
                <li className="mail">
                  <FiMail size="30px" />
                  <p>&nbsp;&nbsp;&nbsp;Revakaryapersada@gmail.com</p>
                </li>
                <li className="loc">
                  <HiLocationMarker size={"33px"} />
                  <p>&nbsp;&nbsp;&nbsp;Jl.Kapisata Bali 16G / 28</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
