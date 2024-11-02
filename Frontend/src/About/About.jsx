import React, { useEffect, useState } from "react";
import AboutData from "../assets/AboutData/AboutData";
import MainCarousel from "./MainCarousel";

const About = () => {
  const [AboutCompany, setAboutCompany] = useState({});

  useEffect(() => {
    setAboutCompany(AboutData);
  }, []);

  return (
    <div className="about-section set-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading">About Our Company</div>
            <div className="top-portion">
              <div className="top-left">
                <img
                  src={`../src/assets/images/${AboutCompany?.companyLogo}`}
                  alt="company logo"
                  className="img-fluid equal-images"
                />
              </div>
              <div className="top-right">
                <MainCarousel allItem={AboutCompany?.company} />
              </div>
            </div>
            <div className="heading">Our Team</div>
            <div className="bottom-portion">
              <div className="team">
                {AboutCompany && AboutCompany.team && AboutCompany.team.map((item, i) => (
                  <div className="team-member">
                    <div className="member-img">
                      <img
                        src={`../src/assets/images/${item.image}`}
                        alt={item.image}
                        className="img-fluid equal-images"
                      />
                    </div>
                    <div className="member-talk">
                      {item.talk}
                      <div className="disclaimer">
                        <p>- {item.name}</p>
                        <p>{item.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
