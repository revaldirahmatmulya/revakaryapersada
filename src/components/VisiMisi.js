import React from "react";
import bg_visi from "../assets/visi-img.jpg";
import "./VisiMisi.css";

const VisiMisi = () => {
  return (
    <div>
      <div className="container">
        <div className="row visi-content">
          <div className="col-lg-6 visi-text col-sm-12">
            <h3 className="text-start title-section-visi">Visi dan Misi</h3>
            <h1 className="text-start title-main-visi">
              Komitmen kami dalam bidang ASMEP
            </h1>
            <div className="frame-visi text-start ms-4 mt-3">
              <h2 className="title-visi">Visi</h2>
              <ul className="text-muted">
                <li>
                  Perusahaan konsultansi yang dapat dipercaya dan diandalkan
                  oleh masyarakat baik perorangan, swasta atau pemerintah{" "}
                </li>
                <li>
                  Perusahaan yang adaptif terhadap perkembangan teknologi yang
                  berwawasan lingkungan baik lingkungan alam dan budaya.{" "}
                </li>
              </ul>
              <h2 className="title-misi">Misi</h2>
              <ul className="text-muted">
                <li>
                  Menghadirkan tenaga -tenaga yang professional dibidangnya
                </li>
                <li>
                  Mengikuti perkembangan informasi dan teknologi terutama dalam
                  hal teknologi bahan dan material
                </li>
                <li>
                  Meningkatkan SDM yang handal dengan mengikuti setiap informasi
                  tentang desain aristektur dan Sipil.{" "}
                </li>
                <li>
                  Memberikan pelayanan yang bertanggung jawab dan komunikatif
                  kepada klien
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 align-self-end col-sm-12 ">
            <img src={bg_visi} className="img-visi " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
