import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Registration from "./Registration";
import AboutData from "../assets/AboutData/AboutData";

const Navbar2 = () => {
  const [MenuToggler, setMenuToggler] = useState(false);
  const [AboutCompany, setAboutCompany] = useState({});

  useEffect(() => {
    setAboutCompany(AboutData);
  }, []);

  return (
    <header className="header">
      <Link to={"/"} className="logo">
        <img
          src={`../src/assets/images/${AboutCompany?.companyLogo}`}
          alt="company logo"
          className="img-fluid"
        />
        <span>{AboutCompany?.companyName}</span>
      </Link>

      <label
        htmlFor=""
        className={`icon-menu ${MenuToggler ? "active" : ""}`}
        onClick={() => setMenuToggler(!MenuToggler)}
      >
        <div className="bar bar--1"></div>
        <div className="bar bar--2"></div>
        <div className="bar bar--3"></div>
      </label>

      <div
        className={`on-active-toggle-background-null ${
          MenuToggler ? "" : "d-none"
        }`}
        onClick={() => setMenuToggler(false)}
      ></div>

      <nav className={`navbar ${MenuToggler ? "active" : ""}`}>
        <Link
          to={"/"}
          style={{ "--i": "0" }}
          onClick={() => setMenuToggler(false)}
        >
          Home
        </Link>
        <Link
          to={"/order"}
          style={{ "--i": "1" }}
          onClick={() => setMenuToggler(false)}
        >
          Orders
        </Link>
        <Link
          to={"/certificates"}
          style={{ "--i": "2" }}
          onClick={() => setMenuToggler(false)}
        >
          Certificates
        </Link>
        <Link
          to={"/about"}
          style={{ "--i": "3" }}
          onClick={() => setMenuToggler(false)}
        >
          About us
        </Link>
        <Link
          to={"/contact"}
          style={{ "--i": "4" }}
          onClick={() => setMenuToggler(false)}
        >
          Contact
        </Link>
      </nav>

      <Registration />
    </header>
  );
};

export default Navbar2;
