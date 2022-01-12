import TitleBar from "components/Bars/TitleBar/TitleBar";
import Button from "components/Buttons/Button/Button";
import React from "react";
import styles from "./Contact.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import useMediaQuery from "utils/hooks/useMediaQuery ";

function Contact() {
  const isBellow = useMediaQuery("(max-width: 700px)");

  return (
    <div className="container-wrapper-2">
      <div className={styles.contact}>
        <div className={styles.contact_left}>
          <TitleBar title="CONTACT" isCenter={isBellow ? true : false} />
          <p
            className={`fs-38px light-brown weight-6 mb-50px ${
              isBellow ? "text-center" : ""
            }`}
          >
            Get in touch
          </p>

          <form className={styles.contact_form}>
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
        <div className={styles.contact_right}>
          <p className="fs-30px mb-20px">
            <span className="weight-8 ">Leander,</span> United State
          </p>
          <p className="fs-18px gray mb-35px">
            269 King Str, 05th Floor, Utral Hosue Leander, TX 78641, United
            States.
          </p>

          <div className="mb-45px">
            <p className="fs-18px gray mb-5px">
              <span className="weight-7">Email:</span> info@primedeveloper.com
            </p>
            <p className="fs-18px gray">
              <span className="weight-7">Skype:</span> prime_developer
            </p>
          </div>

          <p className="fs-18px weight-7 gray">Call directly:</p>
          <p className="fs-30px weight-7 light-brown mb-30px">(512) 761 8025</p>

          <p className="fs-18px weight-7 gray mb-15px">Follow us</p>
          <div className={styles.contact_social}>
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
  );
}

export default Contact;
