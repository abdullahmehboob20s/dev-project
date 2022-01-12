import React from "react";
import "./ContactPage.css";
import Header from "layouts/Header/Header";
import Navbar from "layouts/Navbar/Navbar";
import contactImg from "assets/images/contact-img.png";
import Footer from "layouts/Footer/Footer";
import MapboxGLMap from "components/MapboxGLMap";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Button from "components/Buttons/Button/Button";

function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="mb-100px">
        <Header title="contact us" from="Home" img={contactImg} />
      </div>

      <div className="mb-100px">
        <div className="container-wrapper">
          <div className="contact_form_2_wrapper">
            <div className="mb-35px">
              <div className="formRow">
                <div>
                  <p className="fs-30px mb-10px">
                    <span className="weight-8 ">Leander,</span> United State
                  </p>
                  <p className="fs-18px gray mb-35px">
                    269 King Str, 05th Floor, Utral Hosue Leander, TX 78641,
                    United States.
                  </p>

                  <div className="mb-45px">
                    <p className="fs-18px gray mb-5px">
                      <span className="weight-7">Email:</span>{" "}
                      info@primedeveloper.com
                    </p>
                    <p className="fs-18px gray">
                      <span className="weight-7">Skype:</span> prime_developer
                    </p>
                  </div>
                </div>

                <div>
                  <p className="fs-18px weight-7 gray">Call directly:</p>
                  <p className="fs-30px weight-7 light-brown mb-30px">
                    (512) 761 8025
                  </p>

                  <div>
                    <p className="fs-18px weight-7 gray mb-15px">Follow us</p>
                    <div className={`contact_social`}>
                      <a href="#" className="light-brown pointer">
                        <FaYoutube size={25} />
                      </a>
                      <a href="#" className="light-brown pointer">
                        <FaInstagram size={25} />
                      </a>
                      <a href="#" className="light-brown pointer">
                        <FaFacebookF size={25} />
                      </a>
                      <a href="#" className="light-brown pointer">
                        <FaLinkedinIn size={25} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className={`contact_form contact_form_2`}>
              <input
                type="text"
                placeholder="Name"
                className="fs-18px gray weight-4"
              />
              <input
                type="text"
                placeholder="Email"
                className="fs-18px gray weight-4"
              />
              <select className="fs-18px gray weight-4">
                <option value="Subject" className="fs-18px gray weight-4">
                  Subject
                </option>
              </select>
              <textarea
                placeholder="Message |"
                className="fs-18px gray weight-4"
              ></textarea>

              <Button title="SEND MESSAGE" bgVariant="btn-brown" />
            </form>
          </div>
        </div>
      </div>

      <MapboxGLMap />

      <Footer />
    </div>
  );
}

export default ContactPage;
