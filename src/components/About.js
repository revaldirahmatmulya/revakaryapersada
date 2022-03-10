import React from "react";
import about_img from "../assets/about-img.jpg";
import "./About.css";
import "./ArrowVisi.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about">
      <div className="container-fluid content-wrap">
        <div className="row">
          <div className="col-lg-6 align-self-start col-sm-12">
            <img src={about_img} className="about-img" />
          </div>
          <div className="col-lg-5 offset-lg-1 col-sm-12">
            <div className="frame-about">
              <h3 className="text-start title-section-about">Tentang Kami</h3>
              <h1 className="text-start title-main-about">
                Kami berupaya memberikan pelayanan terbaik dalam bidang ASMEP
              </h1>
              <p className="text-content text-muted">
                Alhamdulillahirobbilalamiin berkat Rahmat Allah SWT kami hadir
                untuk memberikan pelayanan beupa jasa konsultasi Arsitektur,
                Sipil , Mekanikal, Elektrika dan Plumbing. Kehadiran kami
                dihartapkan menjadi solusi dalam mengatasi permasalahan yang
                berkaitan dengan Arsitektural, Sipil, Mekanikal, Elektrikal dan
                Plumbing (ASMEP).
                <br />
                <br />
                Bidang yang kami berikan adalah pertencanaan, pemgawasan dan
                manajemen Arsitektural, Sipil, Mekanikal, Elektrikal dan
                Plumbing (ASMEP). Keterlibatan kami dalam jasa konsultasi
                merupakan bagian dari upaya mengatasi permasalahan –
                permasalahan yang timbul dari Owner (pengguna) baik Pemerintah
                atau swasta.
                <br />
                <br />
                CV. Reva Karya Persada adalah jasa konsultasi yang dapat diajak
                bersama untuk berdiskusi mengatasi permasalahan terhadap
                Arsitektural, Sipil, Mekanikal, Elektrikal dan Plumbing( ASMEP )
                dibidang perencanaan, pengawasan dan manajemen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
