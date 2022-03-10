import React from "react";
import "./Services.css";
import { Card } from "react-bootstrap";

const Services = () => {
  return (
    <div>
      <div className="container-fluid services-bg" id="services">
        <div className="row">
          <div className="col-lg-12 text-center ">
            <h1 className="title-section-services">Pelayanan Kami</h1>
            <div className="line-services align-self-center"></div>
          </div>
        </div>

        <div className="row d-flex justify-content-around">
          <div className="col-lg-4 col-sm-12">
            <Card className="data-card">
              <Card.Body>
                <h2 className="card-title">Perencanaan</h2>
                <Card.Text className="card-item text-start">
                  <ul>
                    <li>Jasa nasehat dan Pradesain Arsitektural</li>
                    <li>Jasa Desain Arsitektural</li>
                    <li>Jasa Desain Interior</li>
                    <li>
                      Jasa Desain Rekayasa Untuk Konstruksi Pondasi serta
                      Struktur Bangunan
                    </li>
                    <li>
                      Jasa Desain Rekayasa Untuk Pekerjaan Teknis Sipil Air
                    </li>
                    <li>
                      Jasa Desain Rekayasa Untuk Pekerjaan Teknis Sipil
                      Transportasi
                    </li>
                    <li>
                      Jasa Desain Rekayasa Untuk Pekerjaan Mekanikal dan
                      Elektrikal Dalam Bangunan{" "}
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-sm-12">
            <Card className="data-card">
              <Card.Body>
                <h2 className="card-title">Pengawasan</h2>
                <Card.Text className="card-item text-start">
                  <ul>
                    <li>Jasa Pengawas Pekerjaan Konstruksi Bangunan Gedung</li>
                    <li>
                      Jasa Pengawas Pekerjaan Konstruksi Teknik Sipil
                      Transportasi
                    </li>
                    <li>Jasa Pengawas Pekerjaan Konstruksi Teknik Sipil Air</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
