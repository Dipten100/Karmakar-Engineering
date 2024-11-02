import React, { useEffect, useState } from "react";
import PageHeader from "../Components/PageHeader";
import AboutData from "../assets/AboutData/AboutData";
import GetIcon from "../Components/GetIcon";
import { Link } from "react-router-dom";
import CountryCode from "../assets/Data/CountryCode";

const AboutUs = () => {
  const [AboutCompany, setAboutCompany] = useState({
    companyLogo: null,
    companyName: "",
    companyNumber: [],
    companyEmail: [],
    companyAddress: "",
    companySocialMedia: [],
    companyLocationInGoogleMap: "",
    company: [],
    team: [],
  });
  const [NewSocialMediaFeild, setNewSocialMediaFeild] = useState({
    name: "Select social media",
    link: "",
  });
  const [NewAboutCompany, setNewAboutCompany] = useState({
    title: "",
    details: "",
    status: "new",
    editKey: null,
  });
  const [NewTeamMember, setNewTeamMember] = useState({
    name: "",
    position: "",
    talk: "",
    image: null,
    status: "new",
    editKey: null,
  });

  useEffect(() => {
    if (AboutData) {
      const {
        companyLogo,
        companyName,
        companyNumber,
        companyEmail,
        companyAddress,
        companySocialMedia,
        companyLocationInGoogleMap,
        company,
        team,
      } = AboutData;
      setAboutCompany({
        companyLogo,
        companyName,
        companyNumber,
        companyEmail,
        companyAddress,
        companySocialMedia,
        companyLocationInGoogleMap,
        company,
        team,
      });
    }
  }, []);

  const handlePhoneNumberChange = (key, value) => {
    const updatePhoneNumber = AboutCompany.companyNumber;
    updatePhoneNumber[key].number = value;
    setAboutCompany({ ...AboutCompany, companyNumber: updatePhoneNumber });
  };

  const handleDeletePhoneNumber = (key) => {
    const updatePhoneNumber = AboutCompany.companyNumber.filter(
      (item, i) => i !== key
    );
    setAboutCompany({ ...AboutCompany, companyNumber: updatePhoneNumber });
  };

  const addNewFeildInCompanyNumber = (e) => {
    e.preventDefault();
    const updatePhoneNumber = AboutCompany.companyNumber;
    updatePhoneNumber.push({
      countryCode: "+91",
      number: "",
    });
    setAboutCompany({ ...AboutCompany, companyNumber: updatePhoneNumber });
  };

  const handleEmailChange = (key, value) => {
    const updateEmail = AboutCompany.companyEmail;
    updateEmail[key] = value;
    setAboutCompany({ ...AboutCompany, companyEmail: updateEmail });
  };

  const handleDeleteEmail = (key) => {
    const updateEmail = AboutCompany.companyEmail.filter(
      (item, i) => i !== key
    );
    setAboutCompany({ ...AboutCompany, companyEmail: updateEmail });
  };

  const addNewFeildInCompanyEmail = (e) => {
    e.preventDefault();
    const updateEmail = AboutCompany.companyEmail;
    updatePhoneNumber.push("");
    setAboutCompany({ ...AboutCompany, companyEmail: updateEmail });
  };

  const handleAddNewSocialMedia = (e) => {
    e.preventDefault();
    if (NewSocialMediaFeild.name !== "Select social media") {
      if (NewSocialMediaFeild.link !== "") {
        const updateSocialMedia = AboutCompany.companySocialMedia;
        updateSocialMedia.push(NewSocialMediaFeild);
        setAboutCompany({
          ...AboutCompany,
          companySocialMedia: updateSocialMedia,
        });
      } else {
        alert("Please Enter Social Media Link");
      }
    } else {
      alert("Please Enter Social Media Type");
    }
  };

  const handleDeleteSocialMedia = (key) => {
    const updateSocialMedia = AboutCompany.companySocialMedia.filter(
      (item, i) => i !== key
    );
    setAboutCompany({ ...AboutCompany, companySocialMedia: updateSocialMedia });
  };

  const handleNewCompanyfeild = () => {
    if (NewAboutCompany.title !== "") {
      if (NewAboutCompany.details !== "") {
        const updateAboutCompany = AboutCompany.company;
        const update = {
          title: NewAboutCompany.title,
          details: NewAboutCompany.details,
        };
        updateAboutCompany.push(update);
        setAboutCompany({ ...AboutCompany, company: updateAboutCompany });
      } else {
        alert("Enter Details in About us");
      }
    } else {
      alert("Enter Title in About us");
    }
  };

  const handleEditedCompanyfeild = () => {
    if (NewAboutCompany.title !== "") {
      if (NewAboutCompany.details !== "") {
        if (NewAboutCompany.editKey !== null) {
          const updateAboutCompany = AboutCompany.company;
          const update = {
            title: NewAboutCompany.title,
            details: NewAboutCompany.details,
          };
          updateAboutCompany[NewAboutCompany.editKey] = update;
          setAboutCompany({ ...AboutCompany, company: updateAboutCompany });
        }
      } else {
        alert("Enter Title in About us");
      }
    } else {
      alert("Enter Title in About us");
    }
  };

  const handleDeleteCompanyfeild = () => {
    if (NewAboutCompany.editKey !== null) {
      const updateAboutCompany = AboutCompany.company.filter(
        (item, i) => i !== NewAboutCompany.editKey
      );
      setAboutCompany({ ...AboutCompany, company: updateAboutCompany });
    }
    setNewAboutCompany({
      title: "",
      details: "",
      status: "new",
      editKey: null,
    });
  };

  const handleEditCompany = (key) => {
    const about = AboutCompany.company[key];
    setNewAboutCompany({
      title: about.title,
      details: about.details,
      status: "edit",
      editKey: key,
    });
  };

  const handleDeleteCompany = (key) => {
    const updateAboutCompany = AboutCompany.company.filter(
      (item, i) => i !== key
    );
    setAboutCompany({ ...AboutCompany, company: updateAboutCompany });
  };

  const handleAddNewTeamMember = () => {
    if (NewTeamMember.name !== "") {
      if (NewTeamMember.position !== "") {
        if (NewTeamMember.talk !== "") {
          if (NewTeamMember.image !== null) {
            const updateTeamMember = AboutCompany.team;
            const member = {
              name: NewTeamMember.name,
              position: NewTeamMember.position,
              talk: NewTeamMember.talk,
              image: NewTeamMember.image,
            };
            updateTeamMember.push(member);
            setAboutCompany({ ...AboutCompany, team: updateTeamMember });
            setNewTeamMember({
              name: "",
              position: "",
              talk: "",
              image: null,
              status: "new",
              editKey: null,
            });
          } else {
            alert("Please select an image for the team member");
          }
        } else {
          alert("Enter Talk in Team Member");
        }
      } else {
        alert("Enter Position of Team Member");
      }
    } else {
      alert("Enter Name of Team Member");
    }
  };
  const handleEditNewTeamMember = () => {
    if (NewTeamMember.name !== "") {
      if (NewTeamMember.position !== "") {
        if (NewTeamMember.talk !== "") {
          if (NewTeamMember.image !== null) {
            const updateTeamMember = AboutCompany.team;
            const member = {
              name: NewTeamMember.name,
              position: NewTeamMember.position,
              talk: NewTeamMember.talk,
              image: NewTeamMember.image,
            };
            updateTeamMember[NewTeamMember.editKey] = member;
            setAboutCompany({ ...AboutCompany, team: updateTeamMember });
            setNewTeamMember({
              name: "",
              position: "",
              talk: "",
              image: null,
              status: "new",
              editKey: null,
            });
          } else {
            alert("Please select an image for the team member");
          }
        } else {
          alert("Enter Talk in Team Member");
        }
      } else {
        alert("Enter Position of Team Member");
      }
    } else {
      alert("Enter Name of Team Member");
    }
  };

  const handleDeleteTeamMember = () => {
    const updateAboutCompany = AboutCompany.team.filter(
      (item, i) => i !== NewTeamMember.editKey
    );
    setAboutCompany({ ...AboutCompany, team: updateAboutCompany });
    setNewTeamMember({
      name: "",
      position: "",
      talk: "",
      image: null,
      status: "new",
      editKey: null,
    });
  };

  const handleEditTeam = (key) => {
    const member = AboutCompany.team[key];
    setNewTeamMember({
      name: member.name,
      position: member.position,
      talk: member.talk,
      image: member.image,
      status: "edit",
      editKey: key,
    });
  };

  const handleDeleteTeam = (key) => {
    const updateAboutCompany = AboutCompany.team.filter((item, i) => i !== key);
    setAboutCompany({ ...AboutCompany, team: updateAboutCompany });
  };

  // const handleChangeValue = (key, value) => {
  //   setAboutCompany({ ...AboutCompany, [key]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const conformation=confirm("Do you want this change permanently ...")
    if(conformation){
      console.log(AboutCompany);
    }
  };

  return (
    <>
      <PageHeader PageTitle={"About Company"} />
      <div className="about-section set-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <form className="about-content" onSubmit={handleSubmit}>
                <div className="set1">
                  <div className="form-input-output">
                    <label htmlFor="companyLogo">Company Logo</label>
                    <div className="form-input">
                      <span className="file-upload">
                        <input
                          type="file"
                          onChange={(e) =>
                            setAboutCompany({
                              ...AboutCompany,
                              companyLogo: e.target.files,
                            })
                          }
                        />
                        <span className="img-show">
                          {AboutCompany.companyLogo !== null && (
                            <>
                              {typeof AboutCompany.companyLogo === "string" ? (
                                <img
                                  src={`../src/assets/images/${AboutCompany.companyLogo}`}
                                  alt={AboutCompany.companyLogo}
                                  className="img-fluid"
                                />
                              ) : (
                                <img
                                  src={URL.createObjectURL(
                                    AboutCompany.companyLogo[0]
                                  )}
                                  alt={AboutCompany.companyLogo[0].name}
                                  className="img-fluid"
                                />
                              )}
                            </>
                          )}
                        </span>
                        <span
                          className={`butn ${
                            AboutCompany.companyLogo === null ? "d-none" : ""
                          }`}
                          onClick={() =>
                            setAboutCompany({
                              ...AboutCompany,
                              companyLogo: null,
                            })
                          }
                        >
                          delete
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="form-input-output">
                    <label htmlFor="companyName">Company Name</label>
                    <div className="form-input">
                      <input
                        type="text"
                        placeholder="Company name"
                        onChange={(e) =>
                          setAboutCompany({
                            ...AboutCompany,
                            companyName: e.target.value,
                          })
                        }
                        value={AboutCompany.companyName}
                      />
                    </div>
                  </div>
                  <div className="form-input-output">
                    <label htmlFor="companyAddress">Company Address</label>
                    <div className="form-input">
                      <textarea
                        type="text"
                        placeholder="Company address"
                        onChange={(e) =>
                          setAboutCompany({
                            ...AboutCompany,
                            companyAddress: e.target.value,
                          })
                        }
                        value={AboutCompany.companyAddress}
                      />
                    </div>
                  </div>
                  <div className="form-input-output">
                    <label htmlFor="companyLocationInGoogleMap">
                      Company Location In Google Map
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        placeholder="Company location in google map"
                        onChange={(e) =>
                          setAboutCompany({
                            ...AboutCompany,
                            companyLocationInGoogleMap: e.target.value,
                          })
                        }
                        value={AboutCompany.companyLocationInGoogleMap}
                      />
                      <span
                        className={`link ${
                          AboutCompany.companyLocationInGoogleMap.length === 0
                            ? "d-none"
                            : ""
                        }`}
                      >
                        <Link
                          to={AboutCompany.companyLocationInGoogleMap}
                          target="_blank"
                        >
                          <GetIcon IconName={"RxExternalLink"} />
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="form-input-output">
                    <label htmlFor="companyNumber">Company Phone Number</label>
                    <div className="add-butns">
                      <button
                        type="button"
                        className="butn"
                        onClick={addNewFeildInCompanyNumber}
                      >
                        Add new feild
                      </button>
                    </div>
                    {AboutCompany &&
                      AboutCompany.companyNumber.map((item, i) => (
                        <div className="form-input-phone-number" key={i}>
                          <span className="country-code">
                            {item.countryCode}
                          </span>
                          {/* <select value={item.CountryCode}>
                            {CountryCode.map((countryCode, index) => (
                              <option value={countryCode.dial_code} key={index}>
                                <span>{countryCode.dial_code}</span>
                                <span>
                                  {countryCode.name} ({countryCode.code})
                                </span>
                              </option>
                            ))}
                          </select> */}
                          <input
                            type="number"
                            placeholder="Company phone number"
                            onChange={(e) =>
                              handlePhoneNumberChange(i, e.target.value)
                            }
                            value={item.number}
                          />
                          <span
                            className="butn"
                            onClick={() => handleDeletePhoneNumber(i)}
                          >
                            delete
                          </span>
                        </div>
                      ))}
                  </div>
                  <div className="form-input-output">
                    <label htmlFor="companyEmail">Company Email</label>
                    <div className="add-butns">
                      <button
                        type="button"
                        className="butn"
                        onClick={addNewFeildInCompanyEmail}
                      >
                        Add new feild
                      </button>
                    </div>
                    {AboutCompany &&
                      AboutCompany.companyEmail.map((item, i) => (
                        <div className="form-input" key={i}>
                          <input
                            type="text"
                            placeholder="Company email"
                            onChange={(e) =>
                              handleEmailChange(i, e.target.value)
                            }
                            value={item}
                          />
                          <span
                            className="butn"
                            onClick={() => handleDeleteEmail(i)}
                          >
                            delete
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="set2">
                  <div className="form-input-output">
                    <label htmlFor="companySocialMedia">
                      Company Social Media Handle
                    </label>
                    <div className="form-input-social-media">
                      <select
                        onChange={(e) =>
                          setNewSocialMediaFeild({
                            ...NewSocialMediaFeild,
                            name: e.target.value,
                          })
                        }
                        value={NewSocialMediaFeild.name}
                        name="selectSocialMedia"
                      >
                        <option value="Select social media">
                          Select social media
                        </option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Company social media link"
                        onChange={(e) =>
                          setNewSocialMediaFeild({
                            ...NewSocialMediaFeild,
                            link: e.target.value,
                          })
                        }
                        value={NewSocialMediaFeild.link}
                      />
                      <span className="butn" onClick={handleAddNewSocialMedia}>
                        add
                      </span>
                    </div>
                    {AboutCompany &&
                      AboutCompany.companySocialMedia.map((item, i) => (
                        <div className="form-output-social-media" key={i}>
                          <span>
                            <Link to={item.link} target="_blank">
                              {item.name === "Facebook" && (
                                <GetIcon IconName={"FaFacebookSquare"} />
                              )}
                              {item.name === "Instagram" && (
                                <GetIcon IconName={"FaInstagramSquare"} />
                              )}
                            </Link>
                          </span>
                          <input
                            type="text"
                            placeholder="Company social media link"
                            value={item.link}
                            readOnly
                          />
                          <span
                            className="butn"
                            onClick={() => handleDeleteSocialMedia(i)}
                          >
                            delete
                          </span>
                        </div>
                      ))}
                  </div>
                  <div className="form-input-output">
                    <label htmlFor="">About Company</label>
                    <div className="form-input">
                      {NewAboutCompany &&
                      NewAboutCompany.title.toLowerCase() === "about us" ? (
                        <input
                          type="text"
                          placeholder="Title"
                          value={NewAboutCompany.title}
                          readOnly
                        />
                      ) : (
                        <input
                          type="text"
                          placeholder="Title"
                          onChange={(e) =>
                            setNewAboutCompany({
                              ...NewAboutCompany,
                              title: e.target.value,
                            })
                          }
                          value={NewAboutCompany.title}
                        />
                      )}
                      <textarea
                        placeholder="details"
                        onChange={(e) =>
                          setNewAboutCompany({
                            ...NewAboutCompany,
                            details: e.target.value,
                          })
                        }
                        value={NewAboutCompany.details}
                      ></textarea>
                    </div>
                    {NewAboutCompany && NewAboutCompany.status === "new" && (
                      <div className="butn" onClick={handleNewCompanyfeild}>
                        add new feild
                      </div>
                    )}
                    {NewAboutCompany && NewAboutCompany.status === "edit" && (
                      <div className="butn" onClick={handleEditedCompanyfeild}>
                        edit feild details
                      </div>
                    )}
                    {NewAboutCompany &&
                      NewAboutCompany.status === "edit" &&
                      NewAboutCompany.title.toLowerCase() !== "about us" && (
                        <div
                          className="butn"
                          onClick={handleDeleteCompanyfeild}
                        >
                          delete feild details
                        </div>
                      )}
                    <div
                      className="butn"
                      onClick={() =>
                        setNewAboutCompany({
                          title: "",
                          details: "",
                          status: "new",
                          editKey: null,
                        })
                      }
                    >
                      cancel
                    </div>
                    <div className="form-output">
                      {AboutCompany &&
                        AboutCompany.company.map((item, i) => (
                          <div className="output feild" key={i}>
                            <div className="title">{item.title}</div>
                            <div className="details">{item.details}</div>
                            <div className="butns">
                              <button
                                type="button"
                                className="butn"
                                onClick={() => handleEditCompany(i)}
                              >
                                Edit
                              </button>
                              {item.title.toLowerCase() !== "about us" && (
                                <button
                                  type="button"
                                  className="butn"
                                  onClick={() => handleDeleteCompany(i)}
                                >
                                  Delete
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="form-input-output">
                    <label htmlFor="">Team Memebers</label>
                    <div className="form-input">
                      <span className="file-upload">
                        <input
                          type="file"
                          onChange={(e) =>
                            setNewTeamMember({
                              ...NewTeamMember,
                              image: e.target.files,
                            })
                          }
                        />
                        <span className="img-show">
                          {NewTeamMember && NewTeamMember.image !== null && (
                            <>
                              {typeof NewTeamMember.image === "string" ? (
                                <img
                                  src={`../src/assets/images/${NewTeamMember.image}`}
                                  className="img-fluid"
                                  alt={NewTeamMember.image}
                                />
                              ) : (
                                <img
                                  src={URL.createObjectURL(
                                    NewTeamMember.image[0]
                                  )}
                                  className="img-fluid"
                                  alt={NewTeamMember.image[0].name}
                                />
                              )}
                            </>
                          )}
                        </span>
                        <span
                          className={`butn ${
                            NewTeamMember.image === null ? "d-none" : ""
                          }`}
                          onClick={() =>
                            setNewTeamMember({
                              ...NewTeamMember,
                              image: null,
                            })
                          }
                        >
                          delete
                        </span>
                      </span>
                      <input
                        type="text"
                        placeholder="Team member name"
                        onChange={(e) =>
                          setNewTeamMember({
                            ...NewTeamMember,
                            name: e.target.value,
                          })
                        }
                        value={NewTeamMember.name}
                      />
                      <input
                        type="text"
                        placeholder="Team member position"
                        onChange={(e) =>
                          setNewTeamMember({
                            ...NewTeamMember,
                            position: e.target.value,
                          })
                        }
                        value={NewTeamMember.position}
                      />
                      <textarea
                        placeholder="Comments"
                        onChange={(e) =>
                          setNewTeamMember({
                            ...NewTeamMember,
                            talk: e.target.value,
                          })
                        }
                        value={NewTeamMember.talk}
                      ></textarea>
                    </div>
                    {NewTeamMember && NewTeamMember.status === "new" && (
                      <div className="butn" onClick={handleAddNewTeamMember}>
                        add new member
                      </div>
                    )}
                    {NewTeamMember && NewTeamMember.status === "edit" && (
                      <>
                        <div className="butn" onClick={handleEditNewTeamMember}>
                          edit member details
                        </div>
                        <div className="butn" onClick={handleDeleteTeamMember}>
                          delete member details
                        </div>
                      </>
                    )}
                    <div
                      className="butn"
                      onClick={() =>
                        setNewTeamMember({
                          name: "",
                          position: "",
                          talk: "",
                          image: null,
                          status: "new",
                          editKey: null,
                        })
                      }
                    >
                      cancel
                    </div>
                    <div className="form-output">
                      {AboutCompany &&
                        AboutCompany.team.map((item, i) => (
                          <div className="output member" key={i}>
                            <div className="top">
                              {typeof item.image === "string" ? (
                                <img
                                  src={`../src/assets/images/${item.image}`}
                                  className="img-fluid"
                                  alt={item.image}
                                />
                              ) : (
                                <img
                                  src={URL.createObjectURL(item.image[0])}
                                  className="img-fluid"
                                  alt={item.image[0].name}
                                />
                              )}
                              <div className="name-position">
                                <div className="name">{item.name}</div>
                                <div className="position">{item.position}</div>
                              </div>
                            </div>
                            <div className="bottom">
                              <textarea
                                placeholder="Comments"
                                value={item.talk}
                              ></textarea>
                            </div>
                            <div className="butns">
                              <button
                                type="button"
                                className="butn"
                                onClick={() => handleEditTeam(i)}
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                className="butn"
                                onClick={() => handleDeleteTeam(i)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <button type="submit" className="butn">
                  Make Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
