import React, { useEffect, useState } from "react";
import PageHeader from "../Components/PageHeader";

const CertificatesData = [
  {
    _id: "1",
    img: "logo.jpg",
    title: "Certificate 1",
  },
  {
    _id: "2",
    img: "logo.jpg",
    title: "Certificate 1",
  },
  {
    _id: "3",
    img: "logo.jpg",
    title: "Certificate 1",
  },
  {
    _id: "4",
    img: "logo.jpg",
    title: "Certificate 1",
  },
  {
    _id: "5",
    img: "logo.jpg",
    title: "Certificate 1",
  },
  {
    _id: "6",
    img: "logo.jpg",
    title: "Certificate 1",
  },
  {
    _id: "7",
    img: "logo.jpg",
    title: "Certificate 1",
  },
  {
    _id: "8",
    img: "logo.jpg",
    title: "Certificate 1",
  },
  {
    _id: "9",
    img: "logo.jpg",
    title: "Certificate 1",
  },
  {
    _id: "10",
    img: "logo.jpg",
    title: "Certificate 1",
  },
  {
    _id: "11",
    img: "logo.jpg",
    title: "Certificate 1",
  },
];

const Certificates = () => {
  const [Certifiactes, setCertifiactes] = useState([]);
  const [FormValue, setFormValue] = useState({
    title: "",
    img: null,
    status: "new",
  });

  useEffect(() => {
    setCertifiactes(CertificatesData);
  }, []);

  const handleEdit = (id) => {
    const certi = CertificatesData.filter((item, i) => item._id === id);
    setFormValue({
      title: certi[0].title,
      img: certi[0].img,
      status: "edit",
    });
  };

  const handleDelete = () => {
    // Delete Certificate
  };

  const handleDeleteImg = () => {
    setFormValue({
      ...FormValue,
      img: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormValue);
  };

  const handleCancleEditing = (e) => {
    e.preventDefault();
    setFormValue({
      title: "",
      img: null,
      status: "new",
    });
  };

  return (
    <>
      <PageHeader PageTitle={"Certificates"} />
      <div className="certificate-section set-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="heading">
                {FormValue.status === "new" && (
                  <h2 className="title">Add Certificate</h2>
                )}
                {FormValue.status === "edit" && (
                  <h2 className="title">Edit Certificate</h2>
                )}
              </div>
              <form className="certificate" onSubmit={handleSubmit}>
                <div className="form-input">
                  <label className="form-label">Certificate Name</label>
                  <input
                    type="text"
                    placeholder="Certificate name"
                    onChange={(e) =>
                      setFormValue({ ...FormValue, title: e.target.value })
                    }
                    value={FormValue.title}
                  />
                </div>
                <div className="form-input">
                  <label className="form-label">Certificate Image</label>
                  <span className="file-upload">
                    <input
                      type="file"
                      onChange={(e) =>
                        setFormValue({
                          ...FormValue,
                          img: e.target.files,
                        })
                      }
                    />
                    <span className="img-show">
                      {FormValue.img !== null && FormValue.status === "new" && (
                        <>
                          <img
                            src={URL.createObjectURL(FormValue.img[0])}
                            className="img-fluid"
                            alt={FormValue.img[0].name}
                          />
                          <span className="butn" onClick={handleDeleteImg}>
                            delete
                          </span>
                        </>
                      )}
                      {FormValue.img !== null &&
                        FormValue.status === "edit" && (
                          <>
                            {typeof FormValue.img === "string" ? (
                              <img
                                src={`../src/assets/images/${FormValue.img}`}
                                className="img-fluid"
                                alt={FormValue.img}
                              />
                            ) : (
                              <img
                                src={URL.createObjectURL(FormValue.img[0])}
                                className="img-fluid"
                                alt={FormValue.img[0].name}
                              />
                            )}
                            <span className="butn" onClick={handleDeleteImg}>
                              delete
                            </span>
                          </>
                        )}
                    </span>
                  </span>
                </div>
                <div className="form-input butns">
                  <button type="submit" className="butn">
                    Submit
                  </button>
                  {FormValue.status === "edit" && (
                    <button
                      type="button"
                      className="butn"
                      onClick={handleCancleEditing}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
              <div className="heading">Show All Certificate</div>
              <div className="show-certificates">
                {CertificatesData.map((item, i) => (
                  <div className="certificate-card" key={i}>
                    <div className="card-img">
                      <img
                        src={`../src/assets/images/${item.img}`}
                        className="img-fluid"
                      />
                    </div>
                    <div className="title">{item.title}</div>
                    <div className="butns">
                      <button
                        type="button"
                        className="butn"
                        onClick={() => handleEdit(item._id)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="butn"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
