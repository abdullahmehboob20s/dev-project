import React from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import Button from "components/Buttons/Button/Button";
import { IoClose } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import { FaStaylinked } from "react-icons/fa";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = (e) => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);
    return () => {
      document.removeEventListener("scroll", handler);
    };
  });

  return (
    <div
      className={`${styles.navbarWrapper} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <div className={styles.navbarLeft}>
            <Link to="/">
              <img src={logo} className={styles.navbarBrand} alt="" />
            </Link>
          </div>

          <button
            className={`${styles.navbarMenu} pointer black`}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <BiMenu size={35} />
          </button>
          <div
            className={`${styles.navbarRight} ${
              isSidebarOpen ? styles.open : ""
            }`}
          >
            <button
              className={` ${styles.sidebarClose} black pointer`}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <IoClose size={30} />
            </button>
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
