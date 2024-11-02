import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import GetIcon from "./GetIcon";

const Registration = () => {
  const [Show, setShow] = useState(false);
  const [Switch, setSwitch] = useState("signup");
  const [SignUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    passwordShow: false,
    confrimPassword: "",
    confrimPasswordShow: false,
  });
  const [SignInData, setSignInData] = useState({
    email: "",
    password: "",
    passwordShow: false,
  });

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    resetValues()
  };

  const handleSwitch=(value)=>{
    setSwitch(value)
    resetValues()
  }

  const resetValues = () => {
    setSignUpData({
      name: "",
      email: "",
      password: "",
      passwordShow: false,
      confrimPassword: "",
      confrimPasswordShow: false,
    });
    setSignInData({
      email: "",
      password: "",
      passwordShow: false,
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(SignUpData);
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(SignInData);
  };

  return (
    <>
      <button type="button" className="lab-btn" onClick={handleShow}>
        <span>Sign up</span>
      </button>
      <Modal className="modal fade" show={Show} onHide={handleClose} centered>
        <div className={`modal-body ${Switch === "signup" ? "" : "d-none"}`}>
          <div className="heading">
            <p>Create New Account</p>
          </div>
          <form className="lab-form" onSubmit={handleSignUp}>
            <div className="form-input">
              <input
                type="text"
                placeholder="Enter name"
                onChange={(e) =>
                  setSignUpData({ ...SignUpData, name: e.target.value })
                }
                value={SignUpData.name}
              />
            </div>
            <div className="form-input">
              <input
                type="email"
                placeholder="Enter email"
                onChange={(e) =>
                  setSignUpData({ ...SignUpData, email: e.target.value })
                }
                value={SignUpData.email}
              />
            </div>
            <div className="form-input">
              <input
                type="password"
                placeholder="Create password"
                onChange={(e) =>
                  setSignUpData({ ...SignUpData, password: e.target.value })
                }
                value={SignUpData.password}
                className="password"
              />
              <div className="eye">
                <span
                  className={`${SignUpData.passwordShow ? "" : "d-none"}`}
                  onClick={() =>
                    setSignUpData({
                      ...SignUpData,
                      passwordShow: !SignUpData.passwordShow,
                    })
                  }
                >
                  <GetIcon IconName={"FaEye"} />
                </span>
                <span
                  className={`${SignUpData.passwordShow ? "d-none" : ""}`}
                  onClick={() =>
                    setSignUpData({
                      ...SignUpData,
                      passwordShow: !SignUpData.passwordShow,
                    })
                  }
                >
                  <GetIcon IconName={"FaEyeSlash"} />
                </span>
              </div>
            </div>
            <div className="form-input">
              <input
                type="password"
                placeholder="Confrim password"
                onChange={(e) =>
                  setSignUpData({
                    ...SignUpData,
                    confrimPassword: e.target.value,
                  })
                }
                value={SignUpData.confrimPassword}
                className="password"
              />
              <div className="eye">
                <span
                  className={`${
                    SignUpData.confrimPasswordShow ? "" : "d-none"
                  }`}
                  onClick={() =>
                    setSignUpData({
                      ...SignUpData,
                      confrimPasswordShow: !SignUpData.confrimPasswordShow,
                    })
                  }
                >
                  <GetIcon IconName={"FaEye"} />
                </span>
                <span
                  className={`${
                    SignUpData.confrimPasswordShow ? "d-none" : ""
                  }`}
                  onClick={() =>
                    setSignUpData({
                      ...SignUpData,
                      confrimPasswordShow: !SignUpData.confrimPasswordShow,
                    })
                  }
                >
                  <GetIcon IconName={"FaEyeSlash"} />
                </span>
              </div>
            </div>
            <div className="form-input">
              <button type="submit" className="lab-btn">
                <span>Sign Up</span>
              </button>
            </div>
            <div className="form-input">
              <p className="other-info">
                Already have an account?{" "}
                <span onClick={() => handleSwitch("signin")}>Log in</span>
              </p>
            </div>
          </form>
        </div>
        <div className={`modal-body ${Switch === "signin" ? "" : "d-none"}`}>
          <div className="heading">
            <p>Welcome Back</p>
          </div>
          <form className="lab-form" onSubmit={handleSignIn}>
            <div className="form-input">
              <input
                type="email"
                placeholder="Enter email"
                onChange={(e) =>
                  setSignInData({ ...setSignInData, email: e.target.value })
                }
                value={SignInData.email}
              />
            </div>
            <div className="form-input">
              <input
                type="password"
                placeholder="Create password"
                onChange={(e) =>
                  setSignInData({ ...setSignInData, password: e.target.value })
                }
                value={SignInData.password}
                className="password"
              />
              <div className="eye">
                <span
                  className={`${SignInData.passwordShow ? "" : "d-none"}`}
                  onClick={() =>
                    setSignInData({
                      ...SignInData,
                      passwordShow: !SignInData.passwordShow,
                    })
                  }
                >
                  <GetIcon IconName={"FaEye"} />
                </span>
                <span
                  className={`${SignInData.passwordShow ? "d-none" : ""}`}
                  onClick={() =>
                    setSignInData({
                      ...SignInData,
                      passwordShow: !SignInData.passwordShow,
                    })
                  }
                >
                  <GetIcon IconName={"FaEyeSlash"} />
                </span>
              </div>
            </div>
            <div className="form-input">
              <button type="submit" className="lab-btn">
                <span>Sign In</span>
              </button>
            </div>
            <div className="form-input">
              <p className="other-info">
                if you want to create new account?{" "}
                <span onClick={() => handleSwitch("signup")}>Sign Up</span>
              </p>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Registration;
