import React from "react";
import CertificateData from "../assets/CertificatesData/CertificateData";

const Certificates = () => {
  console.log(CertificateData);

  return (
    <div className="certificate-section set-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="heading">Certificates</div>
            <div className="section-body">
              {CertificateData &&
                CertificateData.map((item, i) => (
                  <div key={i} className="certificate">
                    <div className="certificate-image">
                      <img
                        src={`../src/assets/images/homeCarouselImage/${item.image}`}
                        className="img-fluid equal-images"
                        alt={item.image}
                        title={item.name}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
