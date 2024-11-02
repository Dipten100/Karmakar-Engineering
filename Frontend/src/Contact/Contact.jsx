import React, { useEffect, useState } from "react";
import AboutData from "../assets/AboutData/AboutData";
import GetIcon from "../Components/GetIcon";

const Contact = () => {
  const [AboutCompany, setAboutCompany] = useState({});

  useEffect(() => {
    setAboutCompany(AboutData);
  }, []);

  const handleOpenUrl = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="contact-section set-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="contact-details">
            <div className="left-portion">
              <div className="heading">Let's get in touch</div>
              <div className="short-text">
                We're open for any suggetion or just to have a chat
              </div>
              <div className="company-details">
                <div className="details">
                  <div className="icon">
                    <GetIcon IconName={"MdLocationOn"} />
                  </div>
                  <div className="text">
                    {AboutCompany && AboutCompany.companyAddress}
                  </div>
                </div>
              </div>
              <div className="company-details">
                {AboutCompany &&
                  AboutCompany.compnayNumber &&
                  AboutCompany.compnayNumber.map((item, i) => (
                    <div className="details" key={i}>
                      <div className="icon">
                        <GetIcon IconName={"FaPhoneAlt"} />
                      </div>
                      <div className="text">{item}</div>
                    </div>
                  ))}
              </div>
              <div className="company-details">
                {AboutCompany &&
                  AboutCompany.companyEmail &&
                  AboutCompany.companyEmail.map((item, i) => (
                    <div className="details" key={i}>
                      <div className="icon">
                        <GetIcon IconName={"MdEmail"} />
                      </div>
                      <div className="text">{item}</div>
                    </div>
                  ))}
              </div>
              <div className="company-details">
                <div className="details">
                  <div
                    className="icon"
                    onClick={() =>
                      handleOpenUrl(
                        AboutCompany && AboutCompany.companyLocationInGoogleMap
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <GetIcon IconName={"FaSearchLocation"} />
                  </div>
                  <div
                    className="text"
                    onClick={() =>
                      handleOpenUrl(
                        AboutCompany && AboutCompany.companyLocationInGoogleMap
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    Find us on Google Map
                  </div>
                </div>
              </div>
            </div>
            <div className="right-portion">
              <div className="heading">Send us a message</div>
              <form className="contact-form">
                <div className="form-input-multiple-feild">
                  <div className="feild">
                    <label htmlFor="userName">Full Name</label>
                    <input type="text" name="userName" placeholder="Name" />
                  </div>
                  <div className="feild">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" placeholder="Email" />
                  </div>
                </div>
                <div className="form-input">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div className="form-input">
                  <label htmlFor="message">Message</label>
                  <textarea type="text" name="message" placeholder="Message" />
                </div>
                <button type="submit" className="lab-btn">
                  Message
                </button>
              </form>
            </div>
          </div>
          <div className="comnpany-social-media">
            <div className="social-links">
              {AboutCompany &&
                AboutCompany.companySocialMedia &&
                AboutCompany.companySocialMedia.map((item, i) => (
                  <div
                    className="links"
                    key={i}
                    onClick={() => handleOpenUrl(item.link)}
                  >
                    {item.name.toLowerCase() === "facebook" && (
                      <GetIcon IconName={"FaFacebookSquare"} />
                    )}
                    {item.name.toLowerCase() === "instagram" && (
                      <GetIcon IconName={"FaInstagramSquare"} />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
