import React, { useEffect, useState } from "react";
import AboutData from "../assets/AboutData/AboutData";
import { Link } from "react-router-dom";
import GetIcon from "./GetIcon";

const Sidebar = () => {
  const [AboutCompany, setAboutCompany] = useState({});

  useEffect(() => {
    setAboutCompany(AboutData);
  }, []);

  const MenuList = [
    { name: "Dashboard", link: "/", iconName: "MdDashboardCustomize" },
    { name: "About Us", link: "/aboutus", iconName: "FaInfo" },
    {
      name: "Certificates",
      link: "/certificates",
      iconName: "PiCertificateFill",
    },
    { name: "Show Product", link: "/showproduct", iconName: "AiFillProduct" },
    { name: "Order List", link: "/order", iconName: "FaClipboardList" },
  ];

  return (
    <div className="sidebar-section">
      <div className="sidebar-header">
        <div className="company-logo">
          <img
            src={
              AboutCompany && `../src/assets/images/${AboutCompany.companyLogo}`
            }
            alt={AboutCompany.companyLogo}
            className="img-fluid"
          />
        </div>
        <div className="company-name">
          {AboutCompany && AboutCompany.companyName}
        </div>
      </div>
      <div className="sidebar-body">
        <ul className="menu-list">
          {MenuList &&
            MenuList.map((item, i) => (
              <li key={i} className="menu-item">
                <Link to={item.link}>
                  <span>
                    <GetIcon IconName={item.iconName} />
                  </span>
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="sidebar-tail">
        <div className="admin-img">
          <img
            src={
              AboutCompany &&
              AboutCompany.adimnDetails &&
              `../src/assets/images/${AboutCompany.adimnDetails[0]?.userImg}`
            }
            alt={
              AboutCompany &&
              AboutCompany.adimnDetails &&
              AboutCompany.adimnDetails[0]?.userImg
            }
            className="img-fluid"
          />
        </div>
        <div className="admin-name-role">
          <div className="name">
            {AboutCompany &&
              AboutCompany.adimnDetails &&
              AboutCompany.adimnDetails[0]?.userName}
          </div>
          <div className="role">
            {AboutCompany &&
              AboutCompany.adimnDetails &&
              AboutCompany.adimnDetails[0]?.role}
          </div>
        </div>
        <div className="access-btn">
          <GetIcon IconName={"FaPlus"} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
