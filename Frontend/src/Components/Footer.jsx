import React from "react";
import { Link } from "react-router-dom";
import GetIcon from "./GetIcon";

const Footer = () => {
  const companyName = "Karmakar Engineering";
  const aboutCompany =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac volutpat metus. Sed fermentum consequat sapien vel pretium. Mauris vestibulum nisl nec purus tristique, nec tempus ligula tristique. In maximus, ante quis aliquet cursus, lorem arcu lacinia ligula, sed sollicitudin massa lacus quis sapien. Vivamus quam velit, molestie quis hendrerit.";
  const phone = "(+91) 12345 67890";
  const alternatePhone = "(+91) 12345 67890";
  const email = "karmakarengineering@gmail.com";
  const location = "Andul,Howrah,Westbengal";

  return (
    <div className="footer-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-5">
            <div className="company-logo-name">
              <img
                src={`../src/assets/images/logo.jpg`}
                alt="Company Logo"
                className="img-fluid"
              />
              <span>{companyName}</span>
            </div>
            <div className="about-company">
              {aboutCompany}
              <div className="contact-list">
                <div className="list">
                  <GetIcon IconName={"IoLocationSharp"} />
                  <span>{location}</span>
                </div>
                <div className="list">
                  <GetIcon IconName={"FaPhoneAlt"} />
                  <span>{phone}</span>
                </div>
                <div className="list">
                  <GetIcon IconName={"FaPhoneAlt"} />
                  <span>{alternatePhone}</span>
                </div>
                <div className="list">
                  <GetIcon IconName={"MdEmail"} />
                  <span>{email}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="footer-links">
              <div className="topics">Quick Links</div>
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>Orders</Link>
              <Link to={"/"}>Certificates</Link>
              <Link to={"/"}>About us</Link>
            </div>
            <div className="social-media-links">
              <div className="topics">Social Media</div>
              <Link to={"/"}>
                <GetIcon IconName={"FaFacebookSquare"} />
              </Link>
              <Link to={"/"}>
                <GetIcon IconName={"FaInstagramSquare"} />
              </Link>
              <Link to={"/"}>
                <GetIcon IconName={"FaWhatsappSquare"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
