import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import GetIcon from "../Components/GetIcon";

const CustomerDataShow = ({ orderID, customer }) => {
  const [Show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div>
        <span
          className={`cursor-pointer ${Show ? "" : "d-none"}`}
          onClick={handleShow}
        >
          <GetIcon IconName={"FaEye"} />
        </span>
        <span
          className={`cursor-pointer ${Show ? "d-none" : ""}`}
          onClick={handleShow}
        >
          <GetIcon IconName={"FaEyeSlash"} />
        </span>
      </div>
      <Modal className="modal fade" show={Show} onHide={handleClose} centered>
        <div className="modal-body">
          <div className="order-id">Order ID: {orderID}</div>
          <div className="customer-details">
            <div className="customer-name">
              <span className="heading">Customer name</span>
              <div>{customer.name}</div>
            </div>
            <div className="customer-phone">
              <span className="heading">Customer phone number</span>
              <div>
                <span>{customer.phone}</span>
                <span>{customer.alternatePhone}</span>
              </div>
            </div>
            <div className="customer-address">
              <span className="heading">Customer address</span>
              <div>{customer.address}</div>
            </div>
            <div className="customer-pincode">
              <span className="heading">Customer pincode</span>
              <div>{customer.pincode}</div>
            </div>
            <div className="customer-landmarks">
              <span className="heading">Customer landmarks</span>
              <div>{customer.landmarks}</div>
            </div>
            <div className="customer-city">
              <span className="heading">Customer city</span>
              <div>{customer.city}</div>
            </div>
            <div className="customer-state">
              <span className="heading">Customer state</span>
              <div>{customer.state}</div>
            </div>
            <div className="customer-country">
              <span className="heading">Customer country</span>
              <div>{customer.country}</div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CustomerDataShow;
