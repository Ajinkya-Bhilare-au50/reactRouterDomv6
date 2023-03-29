import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={style.main}>
      <div className={style.nav}>
        <Link className={style.anchor} to={"/"}>
          Logo
        </Link>
        <div className={style.navbarmain}>
          <Link className={style.anchor} to={"/"}>
            Home
          </Link>
          <Link className={style.anchor} to={"/about"}>
            about
          </Link>
          <Link className={style.anchor} to={"/testimonial"}>
            testimonial
          </Link>
          <Link className={style.anchor} to={"/gallery"}>
            Gallery
          </Link>
          <Link className={style.anchor} to={"/pricing"}>
            pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
