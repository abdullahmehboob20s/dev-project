import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

function ProjectCard({ img, link = "/", title, desc = false }) {
  return (
    <div className={`${styles.card} ${desc ? styles.between : ""}`}>
      <div className={styles.cardbg}>
        <img src={img} alt="" />
      </div>
      <div className="mb-25px">
        <h1
          className={`fs-32px white weight-6  lh-1_1 ${desc ? "mb-15px" : ""} `}
        >
          {title}
        </h1>
        {desc ? (
          <p className="fs-18px weight-4 white ">
            For each project we establish relationships with partners who we
            know will help us create added value for your project. As well as
            bringing together the public and private sectors, we make
            sector-overarching links to gather knowledge.
          </p>
        ) : (
          ""
        )}
      </div>
      <Link to={link} className={`${styles.cardLink} fs-16px weight-5 white`}>
        See Project
        <IoIosArrowForward size={20} className="white" />
      </Link>
    </div>
  );
}

export default ProjectCard;
