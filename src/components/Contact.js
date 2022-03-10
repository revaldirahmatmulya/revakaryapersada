import React from "react";
import "./Contact.css";
import contactImg from "../assets/contact-img.jpg";
import { Alert as alr } from "bootstrap";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbw2sncUii51zueHHAyeYKmgJu9TFGJ7gAm7fj7xHfNCsIRmJPAiuCnq-a8ou4_R_9Gvwg/exec";
const form = document.forms["contact-form"];
const btnSend = document.querySelector(".btn-Send");
const btnLoading = document.querySelector(".btn-Loading");
const Alert = document.querySelector(".my-alert");
const submitForm = (e) => {
  e.preventDefault();
  btnLoading.classList.toggle("d-none");
  btnSend.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnSend.classList.toggle("d-none");
      Alert.classList.toggle("d-none");

      console.log("Success!", response);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
};
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   btnLoading.classList.toggle("d-none");
//   btnSend.classList.toggle("d-none");
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       btnLoading.classList.toggle("d-none");
//       btnSend.classList.toggle("d-none");
//       Alert.classList.toggle("d-none");

//       console.log("Success!", response);
//       form.reset();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });
const Contact = () => {
  return (
    <div>
      <div className="contact-section" id="contact">
        <div className="container ">
          <div className="row">
            <div className="col-lg-7 text-start col-sm-12">
              <div className="contact-text">
                <h1 className="fw-bold contact-title">
                  Ingin Menghubungi Kami ?
                </h1>
                <p className="text-muted">
                  Isikan nama, alamat email, dan pesan anda di samping. <br />
                  Kami akan segera menghubungi anda kembali pada email anda !
                </p>
                <img src={contactImg} alt="" className="contact-img " />
              </div>
            </div>
            <div className="col-lg-5 text-start col-sm-12 form-section">
              <div className="card p-3">
                <div
                  className="my-alert d-none alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Thank You!</strong> I will read and respon your email
                  as soon as possible.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    dismissible
                  ></button>
                </div>

                <form method="post" name="contact-form" onSubmit={submitForm}>
                  <div className="mb-5">
                    <label for="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="nama"
                      className="form-control"
                      id="name"
                    />
                  </div>

                  <div className="mb-5">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>

                  <div className="mb-5">
                    <label for="Message" className="form-label">
                      Message
                    </label>

                    <textarea
                      className="form-control text-area-control"
                      name="pesan"
                      id="exampleFormControlTextarea1"
                      rows="8"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-secondary btn-Send">
                    Submit
                  </button>
                  <button
                    className="btn btn-secondary d-none btn-Loading"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
