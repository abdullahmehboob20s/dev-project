import React from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import Button from "components/Buttons/Button/Button";

function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <div className={styles.navbarLeft}>
            <Link to="/">
              <img src={logo} className={styles.navbarBrand} alt="" />
            </Link>
          </div>
          <div className={styles.navbarRight}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navbarLink} ${
                  isActive ? styles.active : ""
                } fs-20px weight-4 black uppercase `
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/properties"
              className={({ isActive }) =>
                `${styles.navbarLink} ${
                  isActive ? styles.active : ""
                } fs-20px weight-4 black uppercase `
              }
            >
              Properties{" "}
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `${styles.navbarLink} ${
                  isActive ? styles.active : ""
                } fs-20px weight-4 black uppercase `
              }
            >
              {" "}
              About Us
            </NavLink>
            <NavLink
              to="/investor"
              className={({ isActive }) =>
                `${styles.navbarLink} ${
                  isActive ? styles.active : ""
                } fs-20px weight-4 black uppercase `
              }
            >
              Investor
            </NavLink>
            <Button title="contact us" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
